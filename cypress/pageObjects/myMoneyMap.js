const selectors = {
    myMoneyTab: '#money_map_tab',
    chartLegend: '#ext-sprite-1190',
    inflowLabel: '#report-1010_header_hd',
    inflowArrow: '#tool-1033-toolEl',
    directDepositInfoIcon: ':nth-child(2) > .x-grid-cell-actioncolumn-1014 > .x-grid-cell-inner > .x-action-col-icon',
    directDepositCloseWindow: '#tool-1046-toolEl',
    outflowLabel: '#report-1016_header_hd',
    outflowArrow: '#tool-1033-toolEl',
    charityInfoIcon: ':nth-child(4) > .x-grid-cell-actioncolumn-1020 > .x-grid-cell-inner > .x-action-col-icon',
    charityCloseWindow: '#tool-1046-toolEl',
    paymentsToZeroBankLabel: '#report-1022_header_hd',
    paymentsToZeroArow: '#tool-1034-toolEl',
    paymentsInfoIcon: '.x-grid-cell-actioncolumn-1026 > .x-grid-cell-inner > .x-action-col-icon',
    paymentsCloseWindow: '#tool-1046-toolEl',
    summaryLabel: '#summaryReport_header_hd',
    summaryArrow: '#tool-1035-toolEl',
    insuranceOnChart: '#ext-sprite-1277 > tspan',
    restaurantOnChart: '#ext-sprite-1279 > tspan',
    retailOnLegend: '#ext-sprite-1167 > tspan',
    chartHeader: '#ext-sprite-1129 > tspan'
}


class MyMoneyMap {
    verifyIfBasicElelementsAreDisplayed() {
        cy.get(selectors.myMoneyTab).click();
        cy.url().should('include', '/money-map.html');
        cy.get(selectors.chartHeader).should('be.visible');
        cy.get(selectors.chartLegend).should('be.visible')
        cy.get(selectors.inflowLabel).should('be.visible');
        cy.get(selectors.outflowLabel).should('be.visible');
        cy.get(selectors.paymentsToZeroBankLabel).should('be.visible');
        cy.get(selectors.summaryLabel).should('be.visible');
    }

    inflowTableAction() {
        cy.get(selectors.directDepositInfoIcon).click();
        cy.get(selectors.directDepositCloseWindow).click();  
    }

    outflowTableAction() {
        cy.get(selectors.charityInfoIcon).click();
        cy.get(selectors.charityCloseWindow).click();
    }

    paymentsToZeroBankCreditCardsAction() {
        cy.get(selectors.paymentsToZeroArow).click();
        cy.get(selectors.paymentsInfoIcon).click();
        cy.get(selectors.paymentsCloseWindow).click();
        cy.get(selectors.paymentsToZeroArow).click();
    }

    summaryAction() {
        cy.get(selectors.summaryArrow).click();
    }

    legendAction() {
        cy.get(selectors.retailOnLegend).dblclick();
    }

    chartAction() {
        cy.get(selectors.insuranceOnChart).click();
        cy.get(selectors.restaurantOnChart).click();
    }

    collapsingAndExpandingTable() {
        cy.get(selectors.inflowArrow).click();
        cy.get(selectors.outflowArrow).click();
        cy.get(selectors.paymentsToZeroArow).click();
        cy.get(selectors.summaryArrow).click();
    }
}

export default MyMoneyMap; 