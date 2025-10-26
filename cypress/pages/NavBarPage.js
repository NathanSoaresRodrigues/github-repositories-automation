class NavBarPage {
    // Elementos
    get myRepositoriesUrl() {
        return cy.get('.nav.navbar-nav').contains('a', 'Meus Repositórios');
    }

    get otherRepositoriesUrl() {
        return cy.get('.nav.navbar-nav').contains('a', 'Veja Outros Repositórios');
    }

    get favoritesUrl() {
        return cy.get('.nav.navbar-nav').contains('a', 'Favoritos');
    }

    // Ações
    navigateToMyRepositories() {
        this.myRepositoriesUrl.click();
    }

    navigateToOtherRepositories() {
        this.otherRepositoriesUrl.click();
    }

    navigateToFavoritesUrl() {
        this.favoritesUrl.click();
    }
}

export default new NavBarPage();