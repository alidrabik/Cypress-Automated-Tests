import HomePageMenu from "../pageObjects/homePageMenu";
import LoginPage from "../pageObjects/loginPage";

const homePageMenu = new HomePageMenu;
const loginPage = new LoginPage;

    describe('test group home page', () => {
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
    
        describe('Home Page Menu', () => {
            it('Ability to navigate through the top menu on the home page - Home tab', () => {
                homePageMenu.veryfiIfTabsAreDisplayed();
                homePageMenu.clickOnHomeTab();
            }); 
            it('Ability to navigate through the top menu on the home page - Online Banking tab', () => {
                homePageMenu.clickOnOnlineBankingTab();
            });
            it('Ability to navigate through the top menu on the home page - Feedback tab', () => {
                homePageMenu.clickOnFeedbackTab();
                homePageMenu.clickOnLogo();
            });

            it('Correct sending feedback', () => {
                homePageMenu.clickOnFeedbackTab();
                homePageMenu.sendFeedbackForm();
                homePageMenu.clickOnLogo();
            });

            it('Clear the feedback form', () => {
                homePageMenu.clickOnFeedbackTab();
                homePageMenu.clearFeedbackForm();
                homePageMenu.clickOnLogo(); 
            });
        });

        describe('Top Bar on the main page', () => {
            it('Clicking on the page logo', () => {
                homePageMenu.clickOnLogo();
            });

            it('Checking if search input is working', () => {
                homePageMenu.clickOnSearchInputAndTypeText();
            });
        });

        describe('Checking if carousel scrolls left and right', () => {
            it('Clicking on the left arrow on the carousel', () => {
                homePageMenu.clickOnLogo();
                homePageMenu.clickLeftArrowOnTheCarousel();
            });

            it('Clicking on the right arrow on the carousel', () => {
                homePageMenu.clickRightArrowOnTheCarousel();
            });   
        });

        describe('Content links - checking the correctness of redirection to selected pages', () => {
            it('Online Banking - clicking on more service button', () => {
                homePageMenu.clickOnMoreServicesBtn();
                homePageMenu.clickOnLogo();
            });

            it('Click on Checking Account Activity link ', () => {
                homePageMenu.clickOnCheckingAccountActivityLink();
                homePageMenu.clickOnLogo();
            });

            it('Click on Transfer Funds Link', () => {
                homePageMenu.clickOnTransferFundsLink();
                homePageMenu.clickOnLogo();
            });

            it('Click on My Money Map link', () => {
                homePageMenu.clickOnMyMoneyMapLink();
                homePageMenu.clickOnLogo();
            });

            it('Logout from the app', () => {
                loginPage.logoutFromApplication();
            });
        });
    });