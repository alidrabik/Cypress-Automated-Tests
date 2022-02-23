import MyMoneyMap from "../pageObjects/myMoneyMap";
import LoginPage from "../pageObjects/loginPage";

const myMoneyMap = new MyMoneyMap;
const loginPage = new LoginPage;

describe('test group My Money Tab', () => {
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
    
    describe('My Money Map table and chart', () => {
        it('Verification if basic elements are displayed', () => {
            myMoneyMap.verifyIfBasicElelementsAreDisplayed();
        });

        it('Actions in the tables', () => {
            myMoneyMap.inflowTableAction();
            myMoneyMap.outflowTableAction();
            myMoneyMap.paymentsToZeroBankCreditCardsAction();
            myMoneyMap.summaryAction(); 
        });

        it('Action on chart and legend', () => {
            myMoneyMap.chartAction();
            myMoneyMap.legendAction();
        });

        it('Possibility to collapse and expand labels in the table', () => {
            myMoneyMap.collapsingAndExpandingTable();
        });

        it('Logout from the app', () => {
            loginPage.logoutFromApplication();
        });28
    });
});
