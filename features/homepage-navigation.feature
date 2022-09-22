@navigationhomepage
Feature: AirShop homepage navigation

    Background:
        Given the User opens the web page https://air-shop.by/

    @openToLoginBlock
    Scenario Outline:Verify the form is opened after clicking on Login button
        When the User clicks on the login button in the header
        Then the User sees that form is opened

    @openToCatalogPage
    Scenario Outline:Verify the Catalog page is opened after clicking on Catalog button
        When the User clicks on the Catalog button in the menu
        Then the User sees that page is opened with valid title

    @headerLinksRedirect
    Scenario Outline:Verify the redirect of <linkText> link in the Header
        When the User clicks on the <linkText> navigation link in the header
        Then the User is redirected to the <url> link

        Examples:
            | linkText      | url                 |
            | Схема проезда | how-to-find-us      |
            | Контакты      | contact-us/         |
            | Доставка      | delivery-and-return |


