import { Given, When, Then } from "@wdio/cucumber-framework";
import { baseUrl} from "../helpers/constant";
import { LINK_TEXT } from "../helpers/types";
import { homePage } from "../pages/HomePage";
import { loginModal } from "../pages/LoginModal";

let currentUrl:string;

Given(/^the User opens the web page (.+)$/u, async (url) => {
  await browser.url(url);
});

When(/^the User clicks on the login button in the header$/u, async () => {
  const buttonLogin = await homePage.getLoginButton();
  await buttonLogin.waitForClickable();
  await buttonLogin.click();
});

Then(/^the User sees that form is opened$/u, async () => {
  expect(await loginModal.isOpened()).toEqual(true);
});

When(/^the User clicks on the Catalog button in the menu$/u, async () => {
  const catalogButton = await homePage.getCatalogPage();
  await catalogButton.waitForClickable();
  await catalogButton.click();
});

Then(/^the User sees that page is opened with valid title$/u, async () => {
  currentUrl = await homePage.currentUrl;
  expect(currentUrl).toEqual(`${baseUrl}original-sneakers/`);
  expect(await homePage.pageTitle).toEqual(
    "Кроссовки в Минске купить - Nike, Adidas, Reebok, Asics низкие цены."
  );
});

When(/^the User clicks on the (.+) navigation link in the header$/u, async (linkText: LINK_TEXT) => {
  const headerLink = await homePage.getNavigationLinkInHeader(linkText);
  await headerLink.waitForClickable();
  await headerLink.click();
}
);

Then(/^the User is redirected to the (.+) link$/u, async (url) => {
  currentUrl = await homePage.currentUrl;
  expect(currentUrl).toEqual(`${baseUrl}${url}`);
});

