class LoginPage {
    get emailField() {
        return cy.get('#email');
    }

    get passwordField() {
        return cy.get('#password');
    }

    get submitButton() {
        return cy.get("button[type='submit']");
    }
}

export const loginPage = new LoginPage();
