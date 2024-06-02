describe('User Journey', () => {  
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    it('user can find a course on the homepage and complete the courses lessons', () => {
        cy.get("[data-test='course-0']").find('a').eq(3).click()
        cy.location('pathname').should('eq', '/testing-your-first-application')

        cy.get('[data-test="next-lesson-button"]').click()
        cy.location('pathname').should('eq', '/testing-your-first-application/app-install-and-overview')

        cy.get('[data-test="challenge-answer-0"]').click()
        cy.get("[href='installing-cypress-and-writing-our-first-test']").should('exist').click()
        cy.location('pathname').should('eq', '/testing-your-first-application/installing-cypress-and-writing-our-first-test')

        cy.get('[data-test="challenge-answer-0"]').click()
        cy.get("[href='setting-up-data-before-each-test']").should('exist').click()
        cy.location('pathname').should('eq', '/testing-your-first-application/setting-up-data-before-each-test')

        cy.get('[data-test="challenge-answer-0"]').click()
        cy.get("[class=' py-20'] [href]").should('exist').click()
        cy.location('pathname').should('eq', '/')
    })
})