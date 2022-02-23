import AccountActivity from "../pageObjects/accountActivity";
import LoginPage from "../pageObjects/loginPage";

const accountActivity = new AccountActivity;
const loginPage = new LoginPage;

describe('test group account activity tab', () => {
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

    describe('Checking if tabs show transactions and find transactions are displayed', () => {
        it('Show transaction tab', () => {
            accountActivity.veryfiIfBasicElementsAreDisplayed();
        });

        it('Show Transactions tab - accounts to view', () => {
            accountActivity.selectSavings1fromAccountDropdownList();
            accountActivity.selectCheckingfromAccountDropdownList();
            accountActivity.selectSavings2fromAccountDropdownList();
            accountActivity.selectLoanfromAccountDropdownList();
            accountActivity.selectCreditCardfromAccountDropdownList();
            accountActivity.selectBrokeragefromAccountDropdownList();
            accountActivity.selectSavings1fromAccountDropdownList();
        }); 
    });

    describe('Searching data in the Find Transactions form', () => {
        it('Use Find Transactions form searching by description', () => {
            accountActivity.findTransactionsFormByDescription();   
        });

        it('Use Find Transactions form searching by dates', () => {
            accountActivity.findTransactionsFormByDates();
        });

        it('Use Find Transactions form searching by amounts and deposit type', () => {
            accountActivity.findTransactionsFormByAmountsAndDepositType();
        });

        it('Use Find Transactions form searching by amounts and withdrawal type', () => {
            accountActivity.findTransactionsFormByAmountsAndWithdrawalType();
        });

        it('Use Find Transactions form to search all transactions', () => {
            accountActivity.findAllTransactions();
        });

        it('Use Find Transactions forms and type invalid data in "Description" field', () => {
            accountActivity.findTransactionsInvalidData();
        });
        it('Logout from the app', () => {
            loginPage.logoutFromApplication();
        });
    });
});



