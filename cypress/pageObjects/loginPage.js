const selectors = {
    loginTextField: '#user_login',
    passwordTextField: '#user_password',
    signInBtn: "[name='submit']",
    alertErrorLabel: '.alert-error',
    forgotPasswordLink: '[tabindex="5"]',
    emailField: '#user_email',
    sendPasswordBtn: "[name='submit']",
    ForgottenPageHeader: '.page-header',
    usernameDropdown: '.dropdown-toggle',
    logoutLink: '#logout_link'
};

class LoginPage {
    veryfiIfBasicElementsAreDisplayed() {
        cy.url().should('include', '/login.html');
        cy.get(selectors.loginTextField).should('be.visible');
        cy.get(selectors.passwordTextField).should('be.visible');
        cy.get(selectors.signInBtn).should('be.visible');
    }

    fillCredentialsData(username, password) {
        cy.get(selectors.loginTextField).type(username);
        cy.get(selectors.passwordTextField).type(password);
    }

    clickSignInButton() {
        cy.get(selectors.signInBtn).click();
    }

    veryfiSignInButtonText(text) {
        cy.get(selectors.signInBtn).contains(text);
    }

    veryfiIfErrorAlertIsDisplayed(text) {
        cy.get(selectors.alertErrorLabel).should('be.visible');
        cy.get(selectors.alertErrorLabel).contains(text);
        //cy.screenshot({capture: 'fullPage'});
    }

    passwordRecovery() {
        cy.get(selectors.forgotPasswordLink).click();
        cy.url().should('include', '/forgot-password.html');
        cy.get(selectors.emailField).should('be.visible');
        cy.get(selectors.emailField).type('abc@abc.pl');
        cy.get(selectors.sendPasswordBtn).click();
        cy.get(selectors.ForgottenPageHeader).contains('Forgotten Password');
        //cy.screenshot({capture: 'fullPage'});
    }

    logoutFromApplication() {
        cy.get(selectors.usernameDropdown).click({ multiple: true });
        cy.get(selectors.logoutLink).click();
        cy.url().should('include', '/index.html');
    }
};

export default LoginPage;