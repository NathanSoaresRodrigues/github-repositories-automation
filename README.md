# GitHub Repositories Automation

Projeto de automação de testes E2E usando Cypress com Page Objects.

## Pré-requisitos

- Node.js (versão LTS recomendada)
- npm (incluído com Node.js)
- Google Chrome (browser padrão)
- Estar rodando a aplicação do Github Repositories em sua máquina

## Instalação

```bash
# Clone o repositório
git clone https://github.com/NathanSoaresRodrigues/github-repositories-automation.git

# Instale as dependências
npm install
```

## Configuração

O projeto está configurado para rodar em `https://localhost:44329/`. Para alterar a URL base, edite o arquivo `cypress.config.js`.

## Execução dos Testes

```bash
# Abre o Cypress Test Runner
npx cypress open

# Executa os testes em modo headless
npx cypress run
```

## Cenário Implementado

Test case: Favoritar um repositório e validar na lista de favoritos
1. Acessa a página "Veja Outros Repositórios"
2. Realiza busca com caractere aleatório
3. Seleciona um repositório aleatório
4. Marca como favorito
5. Valida presença na lista de favoritos

## Padrões e Boas Práticas

- **Page Object Model (POM)**: Implementado em `cypress/pages/`
  - NavBarPage: Componente reutilizável para navegação
  - OtherRepositoriesPage: Ações da página de repositórios
  - FavoritesPage: Validações da página de favoritos

- **Testes Dinâmicos**: Uso de dados aleatórios para maior cobertura
- **Encapsulamento**: Ações e elementos encapsulados nas Page Objects
- **Validações Assertivas**: Verificações explícitas de visibilidade e existência

## Estrutura do Projeto

```
cypress/
├── e2e/
│   └── github-repositories.cy.js
├── pages/
│   ├── NavBarPage.js
│   ├── OtherRepositoriesPage.js
│   └── FavoritesPage.js
└── support/
    └── commands.js
```