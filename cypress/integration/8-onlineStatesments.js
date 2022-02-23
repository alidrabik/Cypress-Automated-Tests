import OnlineStatements from "../pageObjects/onlineStatements";
import LoginPage from "../pageObjects/loginPage";
import HomePageMenu from "../pageObjects/homePageMenu";

const onlineStatements = new OnlineStatements;
const loginPage = new LoginPage;
const homePageMenu = new HomePageMenu;

describe('test group Online Statements Tab', () => {
    before(() => {
        cy.readFile('./cypress/fixtures/pages.json').then((pages) => {
            cy.visit(pages.zeroBankLoginPage);
            loginPage.fillCredentialsData('username', 'password');
            loginPage.clickSignInButton();
        });
    });

    /*
     * will preserve the session_id, it will not be cleared before the NEXT test starts
     */
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('JSESSIONID');
      });
    
    describe('Downloading statements and documents from accounts', () => {
        it('Verification if basic elements are displayed', () => {
            onlineStatements.verifyIfBasicElementsAredisplayed();
        });

        it('Downloading statements from savings account', () => {
            onlineStatements.accountSavingsStatements();
        }); 

        it('Downloading statements from loan account', () => {
            onlineStatements.accountLoanStatements();
        }); 

        it('Logout from the app', () => {
            loginPage.logoutFromApplication();
            homePageMenu.clickOnLogo();
        });
    });
});
