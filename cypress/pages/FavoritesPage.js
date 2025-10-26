class FavoritesPage {
    // Elementos da tabela
    get favoritesTable() {
        return cy.get('table.table tbody tr').not(':has(th)');
    }

    // Métodos para obter informações dos favoritos
    getRepositoryName(index) {
        return this.favoritesTable.eq(index).find('[data-testid="repo-name"]'); // Ajuste o seletor conforme necessário
    }

    getDescription(index) {
        return this.favoritesTable.eq(index).find('[data-testid="repo-description"]'); // Ajuste o seletor conforme necessário
    }

    getLanguage(index) {
        return this.favoritesTable.eq(index).find('[data-testid="repo-language"]'); // Ajuste o seletor conforme necessário
    }

    getLastUpdate(index) {
        return this.favoritesTable.eq(index).find('[data-testid="repo-last-update"]'); // Ajuste o seletor conforme necessário
    }

    getOwner(index) {
        return this.favoritesTable.eq(index).find('[data-testid="repo-owner"]'); // Ajuste o seletor conforme necessário
    }

    verifyTableIsNotEmpty() {
        this.favoritesTable.should('have.length.greaterThan', 0);
    }
}

export default new FavoritesPage();