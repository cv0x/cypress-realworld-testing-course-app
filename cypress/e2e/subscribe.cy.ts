describe('Newsletter Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('allows users to subscribe  to the email list', () => {
    cy.getByData('email-input').type('test@test.com')
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("test@test.com")
  });
  it("does not allow an invalid email address", () => {
  cy.getByData("email-input").type("test")
  cy.getByData("submit-button").click()
  cy.getByData("success-message").should("not.exist")
})
  
})
 