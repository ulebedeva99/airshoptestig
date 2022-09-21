import { Page } from "@playwright/test";
import { baseUrl } from "../support/constants";
import { NAVBAR_LINKS, NAV_LINKS } from "../support/types";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.url = baseUrl;
  }
  public async clickOnHeaderNavigationLinkByText(linkText: NAV_LINKS) {
    await this.page.locator(`//*/div[2]/a[text()="${linkText}"]`).click();
  }

  public async clickOnBarNavigationLinkByLinkId(linkId: NAVBAR_LINKS) {
    await this.page.locator(`//*[@id="megamenu-menu"]/a[${linkId}]`).click();
  }

  public async clickOnSearchField() {
    await this.page
      .locator(`//*[@id="hero"]/div[1]/div/div/div[1]/button[2]`)
      .click();
  }

  public getSearchField() {
    return this.page.locator(`//*[@id="store-top-search-input"]`);
  }

  public async clickOnSearchIcon() {
    await this.page.locator(`//*[@id="store-top-search-button"]`).click();
  }
}
