class MeusRepositoriosPage {
    // Elementos
    get btnVisitDocumentation() {
        return cy.get('.btn.btn-primary').contains('Visite a documentação');
    }

    get tableRepositories() {
        return cy.get('table.table tbody tr').not(':has(th)');
    }

    get detailsLink() {
        return cy.contains('a', 'Detalhe');
    }

    // Detalhes do Repositório
    get btnReturn() {
        return cy.contains('a', 'Voltar');
    }

    // Ações
    clickVisitDocumentation() {
        this.btnVisitDocumentation.click();
    }

    accessRepositoryDetails(index) {
        this.tableRepositories.eq(index).contains('a', 'Detalhe').click();
    }

    verifyTableIsNotEmpty() {
        this.tableRepositories.should('have.length.greaterThan', 0);
    }

    returnToRepositoryList() {
        this.btnTurnBack.click();
    }
}

export default new MeusRepositoriosPage();