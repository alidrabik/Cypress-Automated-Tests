const selectors = {
    onlineStatementsTab: '#online_statements_tab',
    accountDopdown: '#os_accountId',
    mainHeader: '.board-header',
    accountHeader: '#online_statements_for_account > .board-header',
    year2012: '#online_statements_for_account > div > div > div:nth-child(2) > ul > li.active > a',
    year2011: '#online_statements_for_account > div > div > div:nth-child(2) > ul > li:nth-child(2) > a',
    year2010: '#online_statements_for_account > div > div > div:nth-child(2) > ul > li:nth-child(3) > a',
    year2009: '#online_statements_for_account > div > div > div:nth-child(2) > ul > li:nth-child(4) > a',
    statement2012: '#os_2012 > table > tbody > tr > td:nth-child(1) > a',
    statement2011: '#os_2011 > table > tbody > tr:nth-child(1) > td:nth-child(1) > a',
    statement2010: '#os_2010 > table > tbody > tr:nth-child(1) > td:nth-child(1) > a',
    statement2009: '#os_2009 > table > tbody > tr:nth-child(1) > td:nth-child(1) > a'
}


class OnlineStatements {
    verifyIfBasicElementsAredisplayed() {
        cy.get(selectors.onlineStatementsTab).click();
        cy.url().should('include', '/online-statements.html');
        cy.get(selectors.mainHeader).should('be.visible');
        cy.get(selectors.accountHeader).should('be.visible');
        cy.get(selectors.accountDopdown).should('be.visible');
    }

    accountSavingsStatements() {
        cy.get(selectors.accountDopdown).select('3');
        cy.get(selectors.accountHeader).contains('Account - Savings');
        cy.get(selectors.year2011).click();
        cy.get(selectors.statement2011).click({force: true});
        cy.get(selectors.year2009).click();
        cy.get(selectors.statement2009).click({force: true});
    }

    accountLoanStatements() {
        cy.get(selectors.accountDopdown).select('4');
        cy.get(selectors.accountHeader).click();        
        cy.wait(1000);
        cy.get(selectors.accountHeader).contains('Account - Loan');
        cy.get(selectors.year2012).click();
        cy.get(selectors.statement2012).click({force: true});
        cy.get(selectors.year2010).click();
        cy.get(selectors.statement2010).click({force: true});
    }
}

export default OnlineStatements;

