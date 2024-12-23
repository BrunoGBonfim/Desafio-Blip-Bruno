# GitHub Repository Filter API

Este projeto é uma API desenvolvida em **Node.js** com o framework **Express**, que consome a API do GitHub para listar os repositórios mais antigos do usuário takenet filtrados pela linguagem de programação C#. O código segue os princípios **SOLID**, promovendo modularidade, manutenção e facilidade de extensão.

---

## **Características**

- Consumo da API pública do GitHub.
- Filtragem de repositórios pela linguagem de programação.
- Retorno limitado a um número configurável de repositórios.
- Estruturado para seguir os princípios **SOLID**.
- Fácil extensão para outros filtros ou APIs.

---

## **Tecnologias Utilizadas**

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção de APIs.
- **SOLID Principles**: Boas práticas de design de software.

---

## **Instalação e Configuração**

### **Pré-requisitos**
- Node.js instalado (versão 16 ou superior recomendada).
- npm (gerenciador de pacotes do Node.js).

### **Passos**

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/seu-usuario/github-repository-filter.git
   cd github-repository-filter

2. **Instale as dependências**:
   ```bash
   npm install
   
3. **Inicie o servidor**:
   ```bash
   npm start
   
4. **Acesse o servidor no navegador ou via cliente HTTP**:
   ```bash
   http://localhost:8080
## **Como Funciona**

### **Rota Principal**
- **GET /**: Retorna uma lista de até 5 repositórios do usuário **takenet**, escritos na linguagem `C#`.

### **Exemplo de Resposta**
```json
[
    {
        "id": 1,
        "name": "repo-1",
        "language": "C#",
        "url": "https://github.com/takenet/repo-1"
    },
    {
        "id": 2,
        "name": "repo-2",
        "language": "C#",
        "url": "https://github.com/takenet/repo-2"
    }
]
```

## **Organização do Código**

O projeto é estruturado em classes para garantir que cada parte do sistema siga uma responsabilidade única, conforme os princípios **SOLID**:

### **Classes Principais**

1. **`GitHubService`**
- Responsável por realizar chamadas à API do GitHub.
- Recebe a URL da API no construtor.

2. **`RepositoryFilter`**
- Aplica regras de filtragem aos repositórios.
- Recebe a linguagem-alvo e o limite de repositórios no construtor.

3. **`GitHubController`**
- Intermedia as requisições HTTP e a interação entre o serviço e o filtro.
- Processa e retorna os dados filtrados para o cliente.

## **Configurações**

- **Porta do Servidor**: Configurada com a variável de ambiente `PORT` ou o valor padrão `3000`.
- **URL da API do GitHub**: Definida na constante `GITHUB_API_URL`.


## **Princípios SOLID no Código**

### **Single Responsibility Principle (SRP)**
- Cada classe possui uma única responsabilidade:
  - **GitHubService**: Acesso à API.
  - **RepositoryFilter**: Filtragem de repositórios.
  - **GitHubController**: Controle de rotas.

### **Open/Closed Principle (OCP)**
- O código está aberto para extensão.
  - Exemplo: É possível adicionar novos filtros criando subclasses sem alterar o código existente.

### **Liskov Substitution Principle (LSP)**
- As classes podem ser substituídas por outras implementações desde que respeitem os métodos esperados.

### **Interface Segregation Principle (ISP)**
- Cada classe implementa apenas os métodos necessários para sua função, evitando interfaces excessivamente complexas.

### **Dependency Inversion Principle (DIP)**
- **GitHubController** não depende diretamente de implementações concretas, como **GitHubService** ou **RepositoryFilter**, mas sim de suas abstrações.
