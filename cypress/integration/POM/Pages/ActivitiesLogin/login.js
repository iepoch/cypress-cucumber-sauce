class LoginPage {
  get screen() {
    return cy.get("[data-test=login-button]");
  }
  pageName(title) {
    cy.wait(10000);
    return cy.contains(title).should("be.visible");
  }
  enterUsernamePassword(username, password) {
    cy.wait(10000);
    cy.get("[data-test=username]").clear();
    cy.get("[data-test=username]")
      .type(username)
      .should("have.value", username);
    cy.wait(10000);
    cy.get("[data-test=password]").clear();
    cy.get("[data-test=password]")
      .type(password)
      .should("have.value", password);
  }
  clickLoginButton() {
    return cy.get("[data-test=login-button]").click();
  }
  invalidUserError() {
    cy.wait(1000);
    return cy
      .get("[data-test=error]")
      .contains("Epic sadface: Sorry, this user has been locked out.")
      .should("be.visible");
  }
}

const login = new LoginPage();
export default login;
