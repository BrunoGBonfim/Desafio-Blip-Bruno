const express = require('express');

// Configurações
const PORT = 8080;
const GITHUB_API_URL = 'https://api.github.com/users/takenet/repos?sort=created&direction=asc';

// SRP - Classe para gerenciar chamadas à API
class GitHubService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async fetchRepositories() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error(`Erro ao acessar a API: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Erro na chamada da API:', error.message);
            throw error;
        }
    }
}

// SRP - Classe para aplicar regras de negócio (filtragem)
class RepositoryFilter {
    constructor(language, limit) {
        this.language = language;
        this.limit = limit;
    }0

    filterByLanguage(repositories) {
        const filtered = repositories.filter(repo => repo.language === this.language);
        return filtered.slice(0, this.limit);
    }
}

// DIP & SRP - Controller que organiza as rotas e lógica de resposta
class GitHubController {
    constructor(service, filter) {
        this.service = service;
        this.filter = filter;
    }

    async getRepositories(req, res) {
        try {
            const repositories = await this.service.fetchRepositories();
            const filteredRepositories = this.filter.filterByLanguage(repositories);
            res.json(filteredRepositories);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao processar a requisição' });
        }
    }
}

// Instâncias de classes baseadas nos princípios SOLID
const gitHubService = new GitHubService(GITHUB_API_URL);
const repositoryFilter = new RepositoryFilter('C#', 5);
const gitHubController = new GitHubController(gitHubService, repositoryFilter);

// Configuração do servidor Express
const app = express();

app.get('/repositorios', (req, res) => gitHubController.getRepositories(req, res));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
