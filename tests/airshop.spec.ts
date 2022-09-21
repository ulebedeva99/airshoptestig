import { test, expect } from "@playwright/test";
import { HomePage } from "../src/pages/HomePage";
import { PageFactory } from "../src/pages/pageFactory";
import { NAV_LINKS, PAGES, PAGE_TITLES_NAV_LINKS } from "../src/support/types";


let homepage: HomePage;

test.describe("airshop site test ", async () => {
  test.describe("airshop homepage tests ", async () => {
    test.beforeEach(async ({ page }) => {
      homepage = PageFactory.getPage(page, PAGES.HOME) as HomePage;
      await homepage.visitPage();
    });

    for (const item in NAV_LINKS) {
      const navName = NAV_LINKS[item as keyof typeof NAV_LINKS];
      const pageTitle = PAGE_TITLES_NAV_LINKS[item as keyof typeof PAGE_TITLES_NAV_LINKS]
      test(`Navigation link ${navName} should be clickable in header and open correct page with title "${pageTitle}"`, async () => {
        await homepage.clickOnHeaderNavigationLinkByText(navName);
        expect (await homepage.getTitle()).toEqual(pageTitle)
      });
    }
 });

});
