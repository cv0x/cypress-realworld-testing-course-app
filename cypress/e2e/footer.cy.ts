describe('footer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get("#__next").should("be.visible")
  })
  context('footer link name', () => {
     it('checking whether the first line name is correct', () => {
    cy.get('footer a').eq(0).contains('Next.js')
     })

    it('checking whether the second line name is correct', () => {
      cy.get('footer a').eq(1).contains('Cypress')
    })
    it('checking whether the third line name is correct', () => {
      cy.get('footer a').eq(2).contains('GitHub')
    })
  })
})