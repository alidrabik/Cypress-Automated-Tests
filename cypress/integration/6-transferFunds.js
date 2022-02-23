import TransferFunds from "../pageObjects/transferFunds";
import LoginPage from "../pageObjects/loginPage";

const transferFunds = new TransferFunds;
const loginPage = new LoginPage;

describe('test group Transfer Funds Tab', () => {
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
    
    describe('Transfer Money & Make Payments', () => {
        it('Make money transfer from Saving1 account to Loan account', () => {
            transferFunds.verifyIfBasicElelemntsAreDisplayed();
            transferFunds.makeTrasactionFromSavings1AccountToLoanAccount(); 
        });
        
        it('Cancel transaction', () => {
            transferFunds.cancelEnteredData();
        });

        it('Logout from the app', () => {
            loginPage.logoutFromApplication();
        });
    });
});