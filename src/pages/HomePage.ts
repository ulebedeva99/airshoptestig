import { LINK_TEXT } from "../helpers/types";
import { BasePage } from "./BasePage";

class HomePage extends BasePage {
  constructor() {
    super();
  }
  public getNavigationLinkInHeader = (linkText: LINK_TEXT) => $(`//*/div[2]/a[text()="${linkText}"]`);

  public getLoginButton = () => $(`//*/div[3]/button[2]`);

  public getCatalogPage = () => $(`//*[@id="megamenu-menu"]/a[1]`);
}

export const homePage = new HomePage();
