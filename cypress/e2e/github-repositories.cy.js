import NavBar from '../pages/NavBarPage';
import OtherRepositoriesPage from '../pages/OtherRepositoriesPage';
import Favorites from '../pages/FavoritesPage';

describe('Github Repositories', () => {
    it('Deve favoritar um repositório e validar na lista de favoritos', () => {

        // Acessa a aplicação e direciona para a tela de "Veja outros repositórios"
        cy.visit('/');

        NavBar.navigateToOtherRepositories();

        // Realiza a busca por um caractere aleatório
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));

        OtherRepositoriesPage.searchRepository(randomChar);
        OtherRepositoriesPage.verifyTableIsNotEmpty();

        const randomIndex = Math.floor(Math.random() * 29);

        // Seleciona um repositório aleatório e armazena o nome do repositório para validar na tela de favoritos
        let repositoryName;
        OtherRepositoriesPage.tableRepositories
            .eq(randomIndex)
            .find('td')
            .eq(0)
            .invoke('text')
            .then((text) => {
                repositoryName = text.trim();
            });

        OtherRepositoriesPage.accessRepositoryDetails(randomIndex);
        OtherRepositoriesPage.markAsFavorite();
        OtherRepositoriesPage.returnToRepositoryList();

        // Navega para a tela de Favoritos e valida se o repositório favoritado está presente
        NavBar.navigateToFavoritesUrl();
        Favorites.verifyTableIsNotEmpty();

        cy.then(() => {
            cy.get('table tbody tr')
                .contains('td', repositoryName)
                .should('exist')
                .and('be.visible');
        });
    });
});
