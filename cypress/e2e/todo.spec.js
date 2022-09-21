

context('TodoMVC', () => {
    it('Adcionar uma nova tarefa',() => {
        cy.visit("https://todomvc-app-for-testing.surge.sh/")
        cy.get("input.new-todo")
            .type("Estudar programação!")
            .type("{Enter}")

        // validação / garantia

        cy.get("ul.todo-list li").should("have.length", 1)
    })
})

