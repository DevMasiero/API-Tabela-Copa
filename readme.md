# API CRUD - Tabela da Copa do Mundo

Esta é uma API RESTful construída com Express.js que gerencia uma tabela da Copa do Mundo. O objetivo desta API é permitir que usuários possam criar, ler, atualizar e excluir informações sobre seleções, facilitando o acompanhamento do torneio.

## Funcionalidades

- **Cadastrar Seleções (Create)**: Adicione novas seleções com nome, grupo e número de vitórias.
- **Listar Seleções (Read)**: Recupere todas as seleções cadastradas.
- **Buscar Seleção (Read)**: Obtenha detalhes de uma seleção específica.
- **Atualizar Seleção (Update)**: Modifique informações de seleções existentes.
- **Remover Seleção (Delete)**: Exclua seleções que não participam mais do torneio.

## Tecnologias Utilizadas

- **Linguagem**: JavaScript
- **Framework**: Express.js
- **Banco de Dados**: MySQL
- **Porta**: 3001

## Estrutura do Projeto

```
.
├── controllers
│   └── SelecaoController.js
├── repositories
│   └── SelecaoRepository.js
├── routes.js
├── database
│   └── conexao.js
├── .env
├── package.json
└── server.js
```

## Instalação

### Pré-requisitos

- Node.js (versão 14 ou superior)
- MySQL

### Passos para Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seuusuario/api-copa-do-mundo.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd api-copa-do-mundo
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Crie um banco de dados no MySQL:
   ```sql
   CREATE DATABASE copa_do_mundo;
   ```

5. Configure suas credenciais do banco de dados no arquivo `.env`:
   ```env
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=copa_do_mundo
   ```

6. Inicie o servidor:
   ```bash
   npm run dev
   ```

7. Acesse a API em `http://localhost:3001`.

## Rotas da API

A API disponibiliza os seguintes endpoints seguindo o padrão CRUD:

### Seleções

- **POST /selecoes**: Cadastrar uma nova seleção.
  - **Request Body**: 
    ```json
    {
      "name": "Nome da Seleção",
      "group": "Grupo da Seleção"
    }
    ```

- **GET /selecoes**: Listar todas as seleções.

- **GET /selecoes/:id**: Obter detalhes de uma seleção específica.
  - **Params**: 
    - `id`: ID da seleção.

- **PUT /selecoes/:id**: Atualizar informações de uma seleção.
  - **Request Body**:
    ```json
    {
      "name": "Nome Atualizado",
      "group": "Grupo Atualizado",
    }
    ```

- **DELETE /selecoes/:id**: Remover uma seleção.
  - **Params**: 
    - `id`: ID da seleção.

## Exemplo de Requisições

- **Cadastrar uma Seleção**:
   ```bash
   curl -X POST http://localhost:3001/selecao -H "Content-Type: application/json" -d '{"name": "Brasil", "group": "A", "wins": 5}'
   ```

- **Listar Seleções**:
   ```bash
   curl -X GET http://localhost:3001/selecao
   ```

- **Obter Seleção por ID**:
   ```bash
   curl -X GET http://localhost:3001/selecao/1
   ```

- **Atualizar uma Seleção**:
   ```bash
   curl -X PUT http://localhost:3001/selecao/1 -H "Content-Type: application/json" -d '{"name": "Brasil", "group": "A", "wins": 6}'
   ```

- **Remover uma Seleção**:
   ```bash
   curl -X DELETE http://localhost:3001/selecao/1
   ```

## Contato

Para dúvidas ou sugestões, entre em contato pelo e-mail: andremasierodev@gmail.com
```
