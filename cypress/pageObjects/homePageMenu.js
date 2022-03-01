const selectors = {
    homeTab: '#homeMenu',
    onlineBankingTab: '#onlineBankingMenu',
    feedbackTab: '#feedback',
    carouselLeftArrow: '.carousel-control.custom.left',
    carouselRightArrow: '.carousel-control.custom.right',
    moreServicesBtn: '#online-banking',
    checkingAccountActivity: '#account_activity_link',
    transferFound: '#transfer_funds_link',
    myMoneyMap: '#money_map_link',
    logo: '.brand',
    searchInput: '#searchTerm',
    signInButton: '#signin_button',
    feedbackNamefield: '#name',
    feedbackEmailField: '#email',
    feedbackSubjectField: '#subject',
    feedbackTextField: '#comment',
    feedbackSendBtn: "[name='submit']",
    feedbackClearBtn: "[name='clear']",
    carouselElement: '#carousel',
    onlineBankiengHeader: '.hero-unit.hero-home > div.container > div > div > h1',
    feedbackTitle: '#feedback-title',
    searchResultPage: '.top_offset',
    loginPage: '#login_form',
    showTransactionsTab: '#tabs > ul > li:nth-child(1)',
    transferFundsTab: '#transfer_funds_tab',
    myMoneyTab: '#money_map_tab'
}

class HomePageMenu {
    veryfiIfTabsAreDisplayed() {
        cy.get(selectors.logo).click();
        cy.url().should('include', '/index.html');
        cy.get(selectors.homeTab).should('be.visible');
        cy.get(selectors.onlineBankingTab).should('be.visible');
        cy.get(selectors.feedbackTab).should('be.visible');
        cy.screenshot({capture: 'fullPage'});
    }

    clickOnHomeTab() {
        cy.get(selectors.homeTab).click();
        cy.get(selectors.carouselElement).should('be.visible');
    }

    clickOnOnlineBankingTab() {
        cy.get(selectors.onlineBankingTab).click();
        cy.get(selectors.onlineBankiengHeader).should('be.visible');
        cy.url().should('include', '/online-banking.html');
        cy.screenshot({capture: 'fullPage'});
    }

    clickOnFeedbackTab() {
        cy.get(selectors.feedbackTab).click();
        cy.get(selectors.feedbackTitle).should('be.visible');
        cy.url().should('include', '/feedback.html');
        cy.screenshot({capture: 'fullPage'});
    }

    clickLeftArrowOnTheCarousel() {
        cy.get(selectors.carouselLeftArrow).dblclick({force: true});
    }

    clickRightArrowOnTheCarousel() {
        cy.get(selectors.carouselRightArrow).dblclick({force: true});
    }

    clickOnMoreServicesBtn() {
        cy.get(selectors.moreServicesBtn).click();
        cy.get(selectors.onlineBankiengHeader).should('be.visible');
    }

    clickOnCheckingAccountActivityLink() {
        cy.get(selectors.checkingAccountActivity).click();
        cy.get(selectors.showTransactionsTab).should('be.visible');
    }

    clickOnTransferFundsLink() {
        cy.get(selectors.transferFound).click();
        cy.get(selectors.transferFundsTab).should('be.visible');
    }

    clickOnMyMoneyMapLink() {
        cy.get(selectors.myMoneyMap).click();
        cy.get(selectors.myMoneyTab).should('be.visible');
    }

    veryfyIfBasicElementsAreDisplayed() {
        cy.get(selectors.logo).should('be.visible');
        cy.get(selectors.searchInput).should('be.visible');
        cy.get(selectors.signInButton).should('be.visible');
    }

    clickOnLogo() {
        cy.get(selectors.logo).click();
        cy.url().should('include', '/index.html');
    }

    clickOnSearchInputAndTypeText() {
        cy.get(selectors.searchInput).click();
        cy.get(selectors.searchInput).type('money');
        cy.get(selectors.searchInput).type('{enter}');
        cy.get(selectors.searchResultPage).contains('The following pages were found for the query: money');
        cy.url().should('include', '/search.html?searchTerm=money');
        //cy.screenshot({capture: 'fullPage'});
    }

    clickOnSigInButton() {
        cy.get(selectors.signInButton).click();
        cy.get(selectors.loginPage).should('be.visible');
        cy.url().should('include', '/login.html');
    }

    sendFeedbackForm() {
        cy.get(selectors.feedbackNamefield).type('Anna');
        cy.get(selectors.feedbackEmailField).type('abc@abc.pl');
        cy.get(selectors.feedbackSubjectField).type('test1');
        cy.get(selectors.feedbackTextField).type('test2');
        cy.screenshot({capture: 'fullPage'});
        cy.get(selectors.feedbackSendBtn).click();
    }

    clearFeedbackForm() {
        cy.get(selectors.feedbackNamefield).type('Anna');
        cy.get(selectors.feedbackEmailField).type('abc@abc.pl');
        cy.get(selectors.feedbackSubjectField).type('test1');
        cy.get(selectors.feedbackTextField).type('test2');
        cy.get(selectors.feedbackClearBtn).click();
    }
};

export default HomePageMenu;

