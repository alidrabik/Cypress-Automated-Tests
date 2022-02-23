import PayBills from "../pageObjects/payBills";
import LoginPage from "../pageObjects/loginPage";

const payBills = new PayBills;
const loginPage = new LoginPage;

describe('test group Pay Bills Tab', () => {
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
    
    describe('Making payments process', () => {
        it('Payment to saved payee', () => {
           payBills.verifyIfBasicElelemntsAreDisplayed();
           payBills.makePaymentToYourSavedPayee(); 
        });

        it('Adding new payee', () => {
            payBills.addingNewPayee();
        });

        it('Purchase foreign currency cash', () => {
            payBills.purchaseForeignCurrencyCashInUSD();
            payBills.purchaseForeignCurrencyCashInSelectedCurrency();
        });
        
        it('Logout from the app', () => {
            loginPage.logoutFromApplication();
        });
    });
});

