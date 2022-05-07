import { todosPage } from "../page-objects/todos-page"

describe('Edit todos', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('user is able to edit todo', () => {
      const text = 'Add water'
      const newtext = ' and food'
      todosPage.getInputLine().type(`${text}{enter}`)
      todosPage.getLabelView().dblclick()
      todosPage.getLabelEdit().type(`${newtext}{enter}`)
      todosPage.getTodosList().first().should('have.text', `${text}${newtext}`)
    })

    //negative
    // test is failing on purpose to show that user is able to have the same todos on edit mode
    it('user should not be able to have two the same todos', () => {
      const text1 = 'Add water'
      const text2 = 'Add appel'
      todosPage.getInputLine().type(`${text1}{enter}${text2}{enter}`)
      todosPage.getLabelView().first().dblclick()
      todosPage.getLabelEdit().clear().type(`${text2}{enter}`)
      todosPage.getTodosList().first().should('have.text', text1)
    })
    
  })