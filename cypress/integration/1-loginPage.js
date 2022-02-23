import LoginPage from "../pageObjects/loginPage";
import HomePageMenu from "../pageObjects/homePageMenu";

const loginPage = new LoginPage;
const homePageMenu = new HomePageMenu;

describe('test group login page', () => {
    beforeEach(() => {
        cy.readFile('./cypress/fixtures/pages.json').then((pages) => {
            cy.visit(pages.zeroBankHomePage);
        });

        cy.clearCookies();
        cy.clearLocalStorage();
    });

    describe('Bank - login to the bank account', () => {
        it('Login properly into bank account', () => {
            homePageMenu.clickOnSigInButton();
            cy.url().should('include', '/login.html');
            loginPage.veryfiIfBasicElementsAreDisplayed();
            loginPage.fillCredentialsData('username', 'password');
            loginPage.clickSignInButton();
        });

        it('Login to the application - incorrect login and password', () => {
            homePageMenu.clickOnSigInButton();
            cy.url().should('include', '/login.html');
            loginPage.fillCredentialsData('abc', 'abc');
            loginPage.clickSignInButton();
            loginPage.veryfiIfErrorAlertIsDisplayed('Login and/or password are wrong.');
        });

        it('Verify if it is possible to recover the password', () => {
            homePageMenu.clickOnSigInButton();
            cy.url().should('include', '/login.html');
            loginPage.passwordRecovery();
        });

        it('Logging out from the application', () => {
            homePageMenu.clickOnSigInButton();
            cy.url().should('include', '/login.html');
            loginPage.fillCredentialsData('username', 'password');
            loginPage.clickSignInButton();
            loginPage.logoutFromApplication();
        });
    });
});