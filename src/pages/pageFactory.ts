import { Page } from "@playwright/test";
import { PAGES } from "../support/types";
import { HomePage } from "./HomePage";

export class PageFactory {
  static getPage(page: Page, pageName: PAGES) {
    switch (pageName) {
      case PAGES.HOME:
        return new HomePage(page);
      default:
        return new HomePage(page);
    }
  }
}
