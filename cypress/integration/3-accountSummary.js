import AccountSummary from "../pageObjects/accountSummary";
import LoginPage from "../pageObjects/loginPage";


const accountSummary = new AccountSummary;
const loginPage = new LoginPage;

describe('test group account summary tab', () => {
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

    describe('Checking the correct redirection of active links in the Account Summary tab',() => {
        it('Redirecting links on Cash Accounts table', () => {
            accountSummary.cashAccountsSavingsFirstLinkRedirection();
            accountSummary.cashAccountSavingsSecondLinkRedirection();
        });

        it('Redirecting link on Investment Accounts table', () => {
            accountSummary.investmentAccountsBrokerageLinkRedirection();
        });

        it('Redirecting links on Credit Accounts table', () => {
            accountSummary.creditAccountsChceckingLinkRedirection();
            accountSummary.creditAccountsCreditCardLinkRedirection();
        });

        it('Redirecting links on Loan Accounts table', () => {
            accountSummary.loanAccountsLoanLinkRedirection();
        });

        it('Logout from the app', () => {
            loginPage.logoutFromApplication();
        });
    });
});