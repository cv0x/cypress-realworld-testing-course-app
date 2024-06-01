describe('home page', () => {
  it('the h1 contains the correct text', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[class='mt-4 text-4xl tracking-tight font-extrabold text-white sm\:mt-5 sm\:text-6xl lg\:mt-6 xl\:text-6xl']").contains('Testing Next.js Applications with Cypress')
  })
  it('p contains correct text',() =>{
    cy.visit('http://localhost:3000/')
    cy.get("[class='mt-3 text-base text-gray-500 sm\:mt-5 sm\:text-xl lg\:text-lg xl\:text-xl']").contains('Lorem ipsum dolor sit, amet consectetur adipisicing elit.')
  })
})


