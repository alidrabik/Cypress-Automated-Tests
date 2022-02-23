const selectors = {
    accountActivityTab: '#account_activity_tab',
    showTransactionsHeader: '#ui-tabs-1 > h2',
    findTransactionsHeader: '#ui-tabs-2 > h2',
    showTransactionsTab: '#tabs > ul > li:nth-child(1)',
    findTransactionsTab: '#tabs > ul > li:nth-child(2)',
    accountDropdown: '#aa_accountId',
    depositLabel: '#all_transactions_for_account > table > tbody > tr:nth-child(1) > td:nth-child(3)',
    descriptionInput: '#aa_description',
    fromDatesInput: '#aa_fromDate',
    toDatesInput: '#aa_toDate',
    fromAmountsInput: '#aa_fromAmount',
    toAmountsInput: '#aa_toAmount',
    typeDropdown: '#aa_type',
    findButton: '#find_transactions_form > div.pull-right > button',
    showTransactionsNoResults: '#all_transactions_for_account',
    descriptionContent: '#filtered_transactions_for_account > table > tbody > tr > td:nth-child(2)',
    dateContent: '#filtered_transactions_for_account > table > tbody > tr:nth-child(3) > td:nth-child(1)',
    depositContent: '#filtered_transactions_for_account > table > tbody > tr:nth-child(1) > td:nth-child(3)',
    withdrawalContent: '#filtered_transactions_for_account > table > tbody > tr > td:nth-child(4)',
    findTransactionsNoResults: '#filtered_transactions_for_account > div'
}

class AccountActivity {
    veryfiIfBasicElementsAreDisplayed() {
        cy.get(selectors.accountActivityTab).click();
        cy.url().should('include', '/account-activity.html');
        cy.get(selectors.showTransactionsTab).should('be.visible');
        cy.get(selectors.findTransactionsTab).should('be.visible');
        cy.get(selectors.showTransactionsHeader).should('be.visible');
        cy.get(selectors.depositLabel).should('be.visible');
        //cy.screenshot({capture: 'fullPage'});
    }

    selectSavings1fromAccountDropdownList() {
        cy.get(selectors.accountActivityTab).click();
        cy.get(selectors.accountDropdown).select('1');
        cy.get(selectors.depositLabel).should('be.visible');
    }

    selectCheckingfromAccountDropdownList() {
        cy.get(selectors.accountDropdown).select('2');
        cy.get(selectors.depositLabel).should('be.visible');
    }

    selectSavings2fromAccountDropdownList() {
        cy.get(selectors.accountDropdown).select('3');
        cy.get(selectors.depositLabel).should('be.visible');
    }

    selectLoanfromAccountDropdownList() {
        cy.get(selectors.accountDropdown).select('4');
        cy.get(selectors.depositLabel).should('be.visible');
    }

    selectCreditCardfromAccountDropdownList() {
        cy.get(selectors.accountDropdown).select('5');
        cy.get(selectors.showTransactionsNoResults).contains('No results.');
    }

    selectBrokeragefromAccountDropdownList() {
        cy.get(selectors.accountDropdown).select('6');
        cy.get(selectors.showTransactionsNoResults).contains('No results.');
    }

    findTransactionsFormByDescription() {
        cy.get(selectors.findTransactionsTab).click();
        cy.get(selectors.descriptionInput).type('OFFICE SUPPLY', { force: true });
        cy.get(selectors.findButton).click();
        cy.get(selectors.descriptionContent).contains('OFFICE SUPPLY');
        cy.reload();
    }

    findTransactionsFormByDates() {
        cy.get(selectors.showTransactionsTab).click();
        cy.get(selectors.findTransactionsTab).click();
        cy.get(selectors.fromDatesInput).type('2012-09-01',  { force: true });
        cy.get(selectors.toDatesInput).type('2012-09-06',  { force: true });
        cy.get(selectors.findButton).click();
        cy.get(selectors.dateContent).contains('2012-09-01');
        cy.reload();
    }

    findTransactionsFormByAmountsAndDepositType() {
        cy.get(selectors.showTransactionsTab).click();
        cy.get(selectors.findTransactionsTab).click();
        cy.get(selectors.fromAmountsInput).type('1',  { force: true });
        cy.get(selectors.toAmountsInput).type('10000',  { force: true });
        cy.get(selectors.typeDropdown).select('DEPOSIT');
        cy.get(selectors.findButton).click();
        cy.get(selectors.depositContent).contains('984.3');
        cy.reload();
    }

    findTransactionsFormByAmountsAndWithdrawalType() {
        cy.get(selectors.showTransactionsTab).click();
        cy.get(selectors.findTransactionsTab).click();
        cy.get(selectors.fromAmountsInput).type('1',  { force: true });
        cy.get(selectors.toAmountsInput).type('10000',  { force: true });
        cy.get(selectors.typeDropdown).select('WITHDRAWAL');
        cy.get(selectors.findButton).click();
        cy.get(selectors.withdrawalContent).contains('50');
        cy.reload();
    }

    findAllTransactions() {
        cy.get(selectors.showTransactionsTab).click();
        cy.get(selectors.findTransactionsTab).click();
        cy.get(selectors.findButton).click().parent();
        cy.get(selectors.dateContent).contains('2012-09-01');
        cy.get(selectors.descriptionContent).contains('OFFICE SUPPLY');
        cy.get(selectors.depositContent).contains('984.3');
        cy.get(selectors.withdrawalContent).contains('50');
        cy.reload();
    }

    findTransactionsInvalidData() {
        cy.get(selectors.showTransactionsTab).click();
        cy.get(selectors.findTransactionsTab).click();
        cy.get(selectors.descriptionInput).type('test');
        cy.get(selectors.findButton).click();
        cy.get(selectors.findTransactionsNoResults).contains('No results.');
    }
};

export default AccountActivity; 