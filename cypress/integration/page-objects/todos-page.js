export class TodosPage {
    getInputLine() {
        return  cy.get('.new-todo');
    }

    getCounter() {
        return cy.get('.todo-count');
    }

    getCheckBox() {
        return cy.get('.toggle');
    }

    getTodosList() {
        return cy.get('.view > label');
    }

    getXList() {
        return cy.get('.destroy');
    }
    
    getLabelView() {
        return cy.get('.view');
    }

    getLabelEdit() {
        return cy.get('.edit');
    }
    
}

export const todosPage = new TodosPage()