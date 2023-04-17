/// <reference types="cypress" />

describe('Accessibility testing', () => {
    it('Testcase One', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.injectAxe()
        // cy.checkA11y()
        // cy.checkA11y('.type-text')
        //cy.checkA11y({ exclude: '.type-text' })

        //for excluding a rule
        cy.checkA11y(null, {
            rules: {
                //the id of rule from console log
                "color-contrast": { enabled: false },
                "heading-order": { enabled: false }

            }
        })

        //for using custom commands:
        // https://www.youtube.com/watch?v=DLUJcBPleDU

    })
})
