describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get("#__next").should("be.visible")
  })
  context('hero section', () => {
    it('the h1 contains the correct text', () => {
      cy.get("[class='mt-4 text-4xl tracking-tight font-extrabold text-white sm\:mt-5 sm\:text-6xl lg\:mt-6 xl\:text-6xl']").contains('Testing Next.js Applications with Cypress')
    })

    it('p contains correct text',() =>{
      cy.get("[class='mt-3 text-base text-gray-500 sm\:mt-5 sm\:text-xl lg\:text-lg xl\:text-xl']").contains('Lorem ipsum dolor sit, amet consectetur adipisicing elit.')
    })

    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context('Courses section', () => {
    it('courses: Testing Your First Next.js Application', () => {
      cy.getByData('course-0').find('a').eq(3).click()
      cy.location('pathname').should('eq', '/testing-your-first-application')
    })
    it('course: Testing Foundations', () => {
      cy.get("[data-test='course-1']").find('a').eq(3).click()
      cy.location('pathname').should('eq', '/testing-foundations')
    })
    it('course: Cypress Fundamentals', () => {
      cy.get("[data-test='course-2']").find('a').eq(3).click()
      cy.location('pathname').should('eq', '/cypress-fundamentals')
      
    });
  })

  context("What you'll learn", () => {
    it('first h3 correct text', () => {
      cy.get("[class='mx-auto max-w-md px-4 text-center sm\:max-w-3xl sm\:px-6 lg\:px-8 lg\:max-w-7xl']").find("h3").eq(0).contains("Prepare your Testing Mindset")  
    });
    it('second h3 correct text', () => {
      cy.get("[class='mx-auto max-w-md px-4 text-center sm\:max-w-3xl sm\:px-6 lg\:px-8 lg\:max-w-7xl']").find("h3").eq(1).contains("Learn What to Test")  
    });
    it('third h3 correct text', () => {
      cy.get("[class='mx-auto max-w-md px-4 text-center sm\:max-w-3xl sm\:px-6 lg\:px-8 lg\:max-w-7xl']").find("h3").eq(2).contains("Debug Failing Tests Efficiently")  
    });
    it('fourth h3 correct text', () => {
      cy.get("[class='mx-auto max-w-md px-4 text-center sm\:max-w-3xl sm\:px-6 lg\:px-8 lg\:max-w-7xl']").find("h3").eq(3).contains("Learn Database Initialization & Seeding")  
    });
    it('fifth h3 correct text', () => {
      cy.get("[class='mx-auto max-w-md px-4 text-center sm\:max-w-3xl sm\:px-6 lg\:px-8 lg\:max-w-7xl']").find("h3").eq(4).contains("Understand Different Testing Types")  
    });
    it('sixth h3 correct text', () => {
      cy.get("[class='mx-auto max-w-md px-4 text-center sm\:max-w-3xl sm\:px-6 lg\:px-8 lg\:max-w-7xl']").find("h3").eq(5).contains("Apply your Knowledge")  
    });
  })
})

