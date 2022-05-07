import { todosPage } from "../page-objects/todos-page"

describe('Complete todos', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('user is able to complete todo', () => {
      const text = 'Add water'
      todosPage.getInputLine().type(`${text}{enter}`)
      todosPage.getCheckBox().click()
      cy.contains(text).parent().parent().should('have.class', 'completed')
      todosPage.getCounter().should('have.text', '0 items left')
    })
    
  })