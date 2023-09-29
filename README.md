# Full Cycle 3.0 - Desafio Docker

Ambiente Docker para uma simples aplicação Node que utiliza Nginx como proxy reverso e MySQL como banco de dados.

**Objetivo:** Quando um usuário acessar o Nginx, o mesmo fará uma chamada em nossa aplicação Node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados MySQL, cadastrando um nome no banco.

**Obs.:** Não há CRUD para inserir ou remover registros no banco, a inserção da lista de nomes é feita em _background_ logo ao iniciar a aplicação

# Como Executar

Baixe o repositório da aplicação localmente e altere para dentro dele a partir do seu terminal. Então Basta executar o comando abaixo e a aplicação estará disponível no endereço http://localhost:8080.

```bash
docker-compose up -d
```

Para encerrar a aplicação, ainda no seu terminal dentro do diretório da aplicação, entre com o seguinte comando:

```bash
docker-compose down
```
