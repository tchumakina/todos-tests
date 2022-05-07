import { todosPage } from "../page-objects/todos-page"

describe('Add todos', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('user is able to create todo', () => {
      const text = 'Add water'
      todosPage.getInputLine().type(`${text}{enter}`)
      todosPage.getTodosList().first().should('have.text', text)
      todosPage.getCounter().should('have.text', '1 item left')
    })


    // negative

    // test is failing on purpose to show that validation is missing and user is able to enter non-ASCII symbols
    it('todo should not be added with non-ASCII encoding', () => {
      const text = 'Add ¬ appel'
      todosPage.getInputLine().type(`${text}{enter}`)
      todosPage.getTodosList().first().should('have.text','Add appel')
    })

    // test is failing on purpose to show that user is able to add the same todos
    it('the same todos should not be allowed', () => {
      const text = 'Add appel'
      todosPage.getInputLine().type(`${text}{enter}${text}{enter}`)
      todosPage.getCounter().should('have.text', '1 item left')
    })

    // test is failing on purpose to show that user is not able to add an empty todos
    it('user is able to create empty todo', () => {
      todosPage.getInputLine().type(` {enter}`)
      todosPage.getCounter().should('have.text', '1 item left')
    })
    
  })