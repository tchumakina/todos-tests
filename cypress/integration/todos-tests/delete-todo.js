import { todosPage } from "../page-objects/todos-page"

describe('Delete todos', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('user is able to delete todo', () => {
      const text1 = 'Add water'
      const text2 = 'Add apple'
      todosPage.getInputLine().type(`${text1}{enter}${text2}{enter}`)
      todosPage.getXList().first().click({ force: true })
      todosPage.getTodosList().first().should('have.text', text2)
      todosPage.getCounter().should('have.text', '1 item left')
    })
    
  })