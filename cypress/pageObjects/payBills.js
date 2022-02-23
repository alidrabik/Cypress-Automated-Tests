const selectors = {
    payBillsTab: '#pay_bills_tab',
    paySavedPayeeTab: '.ui-state-default.ui-corner-top.ui-tabs-selected.ui-state-active',
    AddNewPayeeTab: '#tabs > ul > li:nth-child(2) > a',
    purchaseForeignCurrencyTab: '#tabs > ul > li:nth-child(3) > a',
    payeeDropdown: '#sp_payee',
    payeeTooltip: '#sp_get_payee_details',
    payeeTooltipInfoDetails: '#sp_payee_details',
    accountDropdown: '#sp_account',
    amountField: '#sp_amount',
    dateField: '#sp_date',
    descriptionField: '#sp_description',
    payBtn: '#pay_saved_payees',
    payNameField: '#np_new_payee_name',
    payeeAddressField: '#np_new_payee_address',
    accountField: '#np_new_payee_account',
    payeeDetailsField: '#np_new_payee_details',
    addBtn: '#add_new_payee',
    succesfullMsg: '#alert_content',
    currencyDropdown: '#pc_currency',
    currencyAmount: '#pc_amount',
    usdRadioBtn: '#pc_inDollars_true',
    selectedCurrrencyRadioBtn: '#pc_inDollars_false',
    calculateCostsBtn: '#pc_calculate_costs',
    conversionAmountResult: '#pc_conversion_amount',
    purchaseBtn: '#purchase_cash',
    boardHeader: '.board-header'
}

class PayBills {
    verifyIfBasicElelemntsAreDisplayed() {
        cy.get(selectors.payBillsTab).click();
        cy.url().should('include', '/pay-bills.html');
        cy.get(selectors.paySavedPayeeTab).should('be.visible');
        cy.get(selectors.payeeTooltip).click();
        cy.get(selectors.payeeTooltipInfoDetails).contains('For 12119415161214 Sprint account');
        cy.get(selectors.AddNewPayeeTab).should('be.visible');
        cy.get(selectors.purchaseForeignCurrencyTab).should('be.visible');
        cy.get(selectors.boardHeader).contains('Make payments to your saved payees');
        cy.get(selectors.payBtn).should('be.visible');
    }

    makePaymentToYourSavedPayee() {
        cy.get(selectors.paySavedPayeeTab).click();
        cy.get(selectors.payeeDropdown).select('Apple');
        cy.get(selectors.accountDropdown).select('Checking');
        cy.get(selectors.amountField).type('100');
        cy.get(selectors.dateField).type('2022-01-02');
        cy.get(selectors.descriptionField).type('test', {force: true});
        cy.get(selectors.payBtn).click();
        cy.get(selectors.succesfullMsg).should('be.visible');
        cy.get(selectors.succesfullMsg).contains('The payment was successfully submitted.');
    }

    addingNewPayee() {
        cy.get(selectors.AddNewPayeeTab).click();
        cy.get(selectors.payNameField).type('Jan Kowalski');
        cy.get(selectors.payeeAddressField).type('Wrocław, ul. Grabiszyńska 1');
        cy.get(selectors.accountField).type('test');
        cy.get(selectors.payeeDetailsField).type('test2');
        cy.get(selectors.addBtn).click();
        cy.get(selectors.succesfullMsg).contains('The new payee Jan Kowalski was successfully created.');
    }

    purchaseForeignCurrencyCashInUSD() {
        cy.get(selectors.purchaseForeignCurrencyTab).click();
        cy.get(selectors.currencyDropdown).select('JPY');
        cy.get(selectors.currencyAmount).type('2250');
        cy.get(selectors.usdRadioBtn).click();
        cy.get(selectors.calculateCostsBtn).click();
        cy.get(selectors.conversionAmountResult).contains('180868.17 yen (JPY) = 2250.00 U.S. dollar (USD)');
        cy.get(selectors.purchaseBtn).click();
        cy.get(selectors.succesfullMsg).contains('Foreign currency cash was successfully purchased.');
    }

    purchaseForeignCurrencyCashInSelectedCurrency() {
        cy.get(selectors.purchaseForeignCurrencyTab).click();
        cy.get(selectors.currencyDropdown).select('GBP');
        cy.get(selectors.currencyAmount).type('3680');
        cy.get(selectors.selectedCurrrencyRadioBtn).click();
        cy.get(selectors.calculateCostsBtn).click();
        cy.get(selectors.conversionAmountResult).contains('3680.00 pound (GBP) = 6234.66 U.S. dollar (USD)');
        cy.get(selectors.purchaseBtn).click();
        cy.get(selectors.succesfullMsg).contains('Foreign currency cash was successfully purchased.');
    }
}

export default PayBills;
