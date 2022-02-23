const selectors = {
    accountSummaryTab: '#account_summary_tab',
    myMoneyMapTab: '#money_map_tab',
    onlineStatementsTab: '#online_statements_tab',
    savingsFirstLink: '.board:nth-child(2) tr:nth-child(1) td:nth-child(1) > a',
    savingsSecondLink: '.board:nth-child(2) tr:nth-child(2) td:nth-child(1) > a',
    brokerageLink: '.board:nth-child(4) td:nth-child(1) > a',
    checkingLink: '.board:nth-child(6) tr:nth-child(1) td:nth-child(1) > a',
    creditCardLink: '.board:nth-child(6) tr:nth-child(2) td:nth-child(1) > a',
    loanLink: '.board:nth-child(8) td:nth-child(1) > a',
    showTransactionsHeader: '#ui-tabs-1 > h2',
    cashAccountsHeader: '.container :nth-child(2) h2:nth-child(1)'
}


class AccountSummary {
    veryfiIfAccountTabIsDisplayed() {
        cy.get(selectors.accountSummaryTab).should('be.visible');
        cy.url().should('include', '/account-summary.html');
        cy.get(selector.cashAccountsHeader).should('be.visible');
        cy.screenshot({capture: 'fullPage'});
    }

    veryfiIfIsHeaderAndGoBack(headerSelector) {
        cy.get(headerSelector).contains('Show Transactions');
        cy.go('back');
    }

    cashAccountsSavingsFirstLinkRedirection() {
        cy.get(selectors.savingsFirstLink).click();
        this.veryfiIfIsHeaderAndGoBack(selectors.showTransactionsHeader);
    }

    cashAccountSavingsSecondLinkRedirection() {
        cy.get(selectors.savingsSecondLink).click();
        this.veryfiIfIsHeaderAndGoBack(selectors.showTransactionsHeader);
    }

    investmentAccountsBrokerageLinkRedirection() {
        cy.get(selectors.brokerageLink).click();
        this.veryfiIfIsHeaderAndGoBack(selectors.showTransactionsHeader);
    }

    creditAccountsChceckingLinkRedirection() {
        cy.get(selectors.checkingLink).click();
        this.veryfiIfIsHeaderAndGoBack(selectors.showTransactionsHeader);
    }

    creditAccountsCreditCardLinkRedirection() {
        cy.get(selectors.creditCardLink).click();
        this.veryfiIfIsHeaderAndGoBack(selectors.showTransactionsHeader);
    }

    loanAccountsLoanLinkRedirection() {
        cy.get(selectors.loanLink).click();
        this.veryfiIfIsHeaderAndGoBack(selectors.showTransactionsHeader);
    }
    };

export default AccountSummary;

