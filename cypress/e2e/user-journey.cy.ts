describe('User Journey', () => {  
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get("#__next").should("be.visible")
    });

    context('Go through all the lessons', () => {
        it('Testing Your First Next.js Application lesson', () => {
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
        it('Testing Foundations lesson', () => {
            cy.get("[data-test='course-1']").find("a").eq(3).click()
            cy.location('pathname').should('eq', '/testing-foundations')

            cy.get('[data-test="next-lesson-button"]').click()
            cy.location('pathname').should('eq', '/testing-foundations/testing-is-a-mindset')

            cy.get('[data-test="challenge-answer-0"]').click()
            cy.get("[href='knowing-what-to-test']").should('exist').click()
            cy.location('pathname').should('eq', '/testing-foundations/knowing-what-to-test')

            cy.get('[data-test="challenge-answer-0"]').click()
            cy.get("[href='manual-vs-automated-testing']").should('exist').click()
            cy.location('pathname').should('eq', '/testing-foundations/manual-vs-automated-testing')

            cy.get('[data-test="challenge-answer-0"]').click()
            cy.get("[class=' py-20'] [href]").should('exist').click()
            cy.location('pathname').should('eq', '/')
        })
        it('Cypress Fundamentals lesson', () => {
            cy.get("[data-test='course-2']").find("a").eq(3).click()
            cy.location('pathname').should('eq', '/cypress-fundamentals')

            cy.get("[class='py-20'] [href]").click()
            cy.location('pathname').should('eq', '/cypress-fundamentals/how-to-write-a-test')

            cy.get("[data-test='challenge-answer-0']").click()
            cy.get("[href='cypress-runs-in-the-browser']").should('exist').click()
            cy.location('pathname').should('eq', '/cypress-fundamentals/cypress-runs-in-the-browser')

            cy.get("[data-test='challenge-answer-0']").click()
            cy.get("[href='command-chaining']").should('exist').click()
            cy.location('pathname').should('eq', '/cypress-fundamentals/command-chaining')
                
            cy.get("[data-test='challenge-answer-0']").click()
            cy.get("[class=' py-20'] [href]").should('exist').click()
            cy.location('pathname').should('eq', '/')
        })
    })
})