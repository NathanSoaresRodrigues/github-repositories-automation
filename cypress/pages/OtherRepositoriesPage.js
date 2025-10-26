class OtherRepositoriesPage {
    // Elementos
    get searchInput() {
        return cy.get('#Result_Name.form-control');
    }

    get btnSearch() {
        return cy.get('button[type="submit"].btn').contains('Buscar');
    }

    get tableRepositories() {
        return cy.get('table.table tbody tr').not(':has(th)');
    }

    get btnReturn() {
        return cy.contains('a', 'Voltar');
    }

    get btnMarkAsFavorite() {
        return cy.contains('button', 'Marcar Como Favorito');
    }

    // Ações
    searchRepository(repositoryName) {
        this.searchInput.type(repositoryName);
        this.btnSearch.click();
    }

    verifyTableIsNotEmpty() {
        this.tableRepositories.should('have.length.greaterThan', 0);
    }

    accessRepositoryDetails(index) {
        this.tableRepositories.eq(index).contains('a', 'Detalhe').click();
    }

    returnToRepositoryList() {
        this.btnReturn.click();
    }

    markAsFavorite() {
        this.btnMarkAsFavorite.click();
    }
}

export default new OtherRepositoriesPage();