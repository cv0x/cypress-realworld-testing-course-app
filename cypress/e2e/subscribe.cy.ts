describe('Newsletter Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get("#__next").should("be.visible")
  });
  context('Testing Next.js Applications with Cypress subscription', () => {  
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
  context('footer subscription', () => {
    it('allows users to subscribe to the email list', () => {
      cy.get('#email-address').type('test@test.com')
      cy.get("[class='mt-3 rounded-md sm\:mt-0 sm\:ml-3 sm\:flex-shrink-0'] [type]").click()   
      cy.getByData("success-message").should("exist").contains("test@test.com")  
    });
    it('does not allow an invalid email address', () => {
      cy.get('#email-address').type('test')
      cy.get("[class='mt-3 rounded-md sm\:mt-0 sm\:ml-3 sm\:flex-shrink-0'] [type]").click()
      cy.getByData("success-message").should("not.exist")
    })
  })
})
 