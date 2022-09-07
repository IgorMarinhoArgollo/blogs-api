# Blogs API

<p>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/IgorMarinhoArgollo/blogs-api?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/IgorMarinhoArgollo/blogs-api">
  
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/IgorMarinhoArgollo/blogs-api">
    
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   
<details>
  <summary><h2>:brazil: Português</h2></summary>
  O Projeto Blogs API foi desenvolvido com fins educacionais no módulo de Backend do Curso de Desenvolvimento Web Full Stack na Trybe. <br> Além da parcela do backend (desenvolvida em Node.js e ExpressJS com JavaScript), o projeto conta com um bando de dados relacionais desenvolvido com o MySQL, populado com o Mapeamento Objeto Relacional (ORM), utiliando o Sequelize como ferramenta.<br><br>
  
  ## Live Link
  * Localmente a aplicação está funcionando como deveria, entretanto, tendo em vista a não gratuidade do serviço de banco de dados do Heroku, a implementação do banco não foi realizada. Sendo assim, para testar a aplicação basta realizar os passos indicados na seção como rodar e testar a aplicação.
  
  ## Objetivos
  * Elaborar o Backend de um gerenciador de blog;
  * Implementar as rotas: Login, User, Post, Category e outra para documentação e testagem;
  * Implementar as rotas com consultas do banco de dados MySQL;
  * Adotar boas práticas do ponto de vista de segurança usando: Helmet, Rate-Limit e DotEnv;
  * Utilizar o Swagger para criar a documentação;
  * Utilização do Mapeamento Objeto Relacional (ORM), utilizando Sequelize como ferramenta;
  * Configuração de arquivos Docker para rodar o software.<br><br>
  
  ## Tecnologias usadas
  * node.js
  * Express Js
  * Arquitetura MSC - Model, Service, Controller
  * ORM/Sequelize
  * Husky
  * Commitizen
  * ESLint
  * Docker
  * Helmet
  * Rate-Limit
  * Morgan
  * Swagger
  * Rescue
  * Nyc
  * Mocha
  * Chai
  * Sinon
  * DotEnv<br><br>

      
  ## Como Rodar
      
  ### Clonar no seu computador (via SSH)
  No terminal:
  
    git clone git@github.com:IgorMarinhoArgollo/blogs-api.git
       
  ### Crie o arquivo .env na pasta talker-manager
  Chaves que devem ser inseridas:
  ```
    ## SERVER VARS
    NODE_ENV=development
    API_PORT=3000

    ## DATABASE VARS
    MYSQL_HOST=db (ao utilizar o MySQL local, trocar esse valour para: localhost)
    MYSQL_PORT=3306
    MYSQL_DB_NAME=blogs-api
    MYSQL_USER=root (ao utilizar o MySQL localmente, trocar para o usuário local)
    MYSQL_PASSWORD=12345678 (ao utilizar o MySQL localmente, trocar para a senha local)

    ## SECRECT VARS
    JWT_SECRET=suaSenhaSecreta
  ```
    
  ### Rodar Localmente
  #### Requisitos:
   * node.js
   * MySQL
  
  #### Iniciando criando e populando o banco
  No terminal:
  
    npm run database
  
  
  #### Iniciando o projeto localmente
  No terminal:
  
    npm run dev
          
      
  ### Rodar no Container
  #### Requisitos:
   * Docker
   * Docker-compose
  
  #### Iniciando o projeto localmente
  no terminal:
  
    docker-compose up


  ## Testar rotas protegidas na documentação
   1. Utilizar a rota login para obter o token
   2. Copiar apenas a parte do JWT token e aplicar no botão Authorization na parte superior da documentação<br>
   
   Exemplo do retorno do login:
   
    {
    "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY2MTgwODE4MSwiZXhwIjoxNjYyNDEyOTgxfQ.usrh36s9E0P45OovNFLGbmuMz8x4C4mNQFoJs2dLLl8"
    }

   Exemplo de inserção no Authorization:
   ```eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY2MTgwODE4MSwiZXhwIjoxNjYyNDEyOTgxfQ.usrh36s9E0P45OovNFLGbmuMz8x4C4mNQFoJs2dLLl8```


  ## Rotas
  Vide detalhes na documentação disponível na rota: 
  
  * GET /api-docs
  ------------------------
  * POST /login
  * POST /user
  * GET /user
  * GET /user/:id
  * DELETE /user/me
  * GET /categories/
  * POST /categories
  * POST /post
  * GET /post/
  * GET /post/:id
  * PUT /post/:id
  * DELETE /post/:id
  * GET /post/search?q=
  
    
  ## Como contribuir no projeto
  1. Faça um **fork** do projeto;
  2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`;
  3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`;
  4. Envie as suas alterações: `git push origin my-feature`;
  5. Abra o seu pull-request na página do GitHub.<br><br>

  ##  Autor
<a href="https://www.linkedin.com/in/igormarinhoargollo/">
 <img style="border-radius:300px;" src="https://avatars.githubusercontent.com/u/85767736?s=96&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Igor Marinho Argollo</b></sub></a> <a href="https://www.linkedin.com/in/igormarinhoargollo/"></a>
 <br><br>

  ## Licença
  Esse projeto está sob a licença:
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"><br><br>
</details>
  
  ##  
  ## :us: English
  The Blogs API Project was developed for educational purposes in the Backend module of the Full Stack Web Development Course at Trybe. <br> In addition to the backend portion (developed in Node.js and ExpressJS with JavaScript), the project has a relational database developed with MySQL, populated with Object Relational Mapping (ORM), using Sequelize as a tool.<br><br>

## Live Link
* Locally the application is working as it should, however, due to the non-gratuity of the Heroku database service, the database implementation was not carried out. Therefore, to test the application, just follow the steps indicated in the section on how to run and test the application.

## My Goals
* Elaborate the Backend of a blog manager;
* Implement the routes: Login, User, Post, Category and another for documentation and testing;
* Implement routes with MySQL database queries;
* Adopt best practices from a security point of view using: Helmet, Rate-Limit and DotEnv;
* Use Swagger to create documentation;
* Use of Object Relational Mapping (ORM), using Sequelize as a tool;
* Configuration of Docker files to run the software.<br><br>

## Used Technologies
* node.js
* Express Js
* Arquitetura MSC - Model, Service, Controller
* ORM/Sequelize
* Husky
* Commitizen
* ESLint
* Docker
* Helmet
* Rate-Limit
* Morgan
* Swagger
* Rescue
* Nyc
* Mocha
* Chai
* Sinon
* DotEnv<br><br>

    
## How to Run
      
  ### Clone the repository on your computer (via SSH)
  On terminal:
  
    git clone git@github.com:IgorMarinhoArgollo/blogs-api.git
    
  ### Create the .env file on talker-manager file
  Keys that must be included:
  ```
    ## SERVER VARS
    NODE_ENV=development
    API_PORT=3000

    ## DATABASE VARS
    MYSQL_HOST=db (if using MySQL locally, change to: localhost)
    MYSQL_PORT=3306
    MYSQL_DB_NAME=blogs-api
    MYSQL_USER=root (if using MySQL locally, change to local user)
    MYSQL_PASSWORD=12345678 (if using MySQL locally, change to local password)

    ## SECRECT VARS
    JWT_SECRET=suaSenhaSecreta
  ```

  ### Running Locally
  #### Requirements:
   * node.js
   * MySQL
  
  #### Stasting and population database
  On terminal:
  
    npm run database


  #### Starting the project locally
  On terminal:
  
    npm run dev
      
      
  ### Running on Container
  #### Requirements:
   * Docker
   * Docker-compose
  
  #### Starting the project on Docker
  On terminal:
  
    docker-compose up

  ## Testing protected routes on documentation
   1. Use login route to get a token
   2. Copy only the JWT token part and place it on Authorization button in the upper part of the page<br>
   
   Example of login return:
   ```
   {
    "token": "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY2MTgwODE4MSwiZXhwIjoxNjYyNDEyOTgxfQ.usrh36s9E0P45OovNFLGbmuMz8x4C4mNQFoJs2dLLl8"
    }
   ```
   
   Example of what should be placed on Authorization:
   ```eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY2MTgwODE4MSwiZXhwIjoxNjYyNDEyOTgxfQ.usrh36s9E0P45OovNFLGbmuMz8x4C4mNQFoJs2dLLl8```

## Routes
  See more details on documentation available on route: 
  
  * GET /api-docs
  ------------------------
  * POST /login
  * POST /user
  * GET /user
  * GET /user/:id
  * DELETE /user/me
  * GET /categories/
  * POST /categories
  * POST /post
  * GET /post/
  * GET /post/:id
  * PUT /post/:id
  * DELETE /post/:id
  * GET /post/search?q=
  
  
## How to contribute on the project
  1. Make a **fork** of the project;
  2. Create a new branch with your changes: `git checkout -b my-feature`;
  3. Save your changes and create a commit message explaining what you have done: `git commit -m "feature: My new feature"`;
  4. Send your changes: `git push origin my-feature`;
  5. Open your pull-request on GitHub.<br><br>

##  Author
<a href="https://www.linkedin.com/in/igormarinhoargollo/">
 <img style="border-radius:300px;" src="https://avatars.githubusercontent.com/u/85767736?s=96&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Igor Marinho Argollo</b></sub></a> <a href="https://www.linkedin.com/in/igormarinhoargollo/"></a>
 <br />
  
## License
  This project is under license:
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"><br><br>
