const selectors = {
    transferFundsTab: '#transfer_funds_tab',
    fromAccountDropdown: '#tf_fromAccountId',
    toAccountDropdown: '#tf_toAccountId',
    amountField: '#tf_amount',
    descriptionField: '#tf_description',
    continueBtn: '#btn_submit',
    submitBtn: '#btn_submit',
    cancelBtn: '#btn_cancel',
    verifycationMsg: '#transfer_funds_content > form > div > div > div.board > div > p',
    successMsg: '.alert.alert-success',
    makeAnotherTransferHyperlink: '#transfer_funds_content > div > a'
}


class TransferFunds {
    verifyIfBasicElelemntsAreDisplayed() {
        cy.get(selectors.transferFundsTab).click();
        cy.url().should('include', '/transfer-funds.html');
        cy.get(selectors.fromAccountDropdown).should('be.visible');
        cy.get(selectors.toAccountDropdown).should('be.visible');
        cy.get(selectors.amountField).should('be.visible');
        cy.get(selectors.descriptionField).should('be.visible');
        cy.get(selectors.continueBtn).should('be.visible');
    }

    makeTrasactionFromSavings1AccountToLoanAccount() {
        cy.get(selectors.fromAccountDropdown).select('1');
        cy.get(selectors.toAccountDropdown).select('4', {force: true} );
        cy.get(selectors.amountField).type('500');
        cy.get(selectors.descriptionField).type('test description');
        cy.get(selectors.continueBtn).click();
        cy.url().should('include', '/transfer-funds-verify.html');
        cy.get(selectors.verifycationMsg).contains('Please verify that the following transaction is correct by selecting the Submit button below.');
        //cy.screenshot({capture: 'fullPage'});
        cy.get(selectors.submitBtn).click();
        cy.get(selectors.successMsg).contains('You successfully submitted your transaction.');
        cy.get(selectors.makeAnotherTransferHyperlink).click();
        //cy.screenshot({capture: 'fullPage'});
    }

    cancelEnteredData () {
        cy.get(selectors.fromAccountDropdown).select('2');
        cy.get(selectors.toAccountDropdown).select('5', {force: true});
        cy.get(selectors.amountField).type('100');
        cy.get(selectors.continueBtn).click();
        cy.url().should('include', '/transfer-funds-verify.html');
        cy.get(selectors.verifycationMsg).contains('Please verify that the following transaction is correct by selecting the Submit button below.');
        //cy.screenshot({capture: 'fullPage'});
        cy.get(selectors.cancelBtn).click();
    }
}

export default TransferFunds;

