<h1>Transformação de API Javascript em Typescript e criação de testes </h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=express&message=framework&color=blue&style=for-the-badge&logo=EXPRESS"/>
  <img src="http://img.shields.io/static/v1?label=TESTES&message=%3E100&color=GREEN&style=for-the-badge"/>
   <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p>

> Status do Projeto: :heavy_check_mark: (concluido)

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação)

:small_blue_diamond: [Como configurar o banco de dados](#como-configurar-o-banco-de-dados)

:small_blue_diamond: [Como rodar os testes](#como-rodar-os-testes)

:small_blue_diamond: [Linguagens](#linguagens)

## Descrição do projeto 

<p align="justify">
  Desafio 7 da formação em tecnologia da escola DNC onde recebi uma API em Javascript e transformei em Typescript e depois fiz testes com o Jest. 
</p>


## Como rodar a aplicação

No terminal, clone o projeto: 

```
git clone https://github.com/jpadedg/tests_desafio7.git

cd testes_desafio7

code .
```

Após isso, é necessário instalar as dependencias

```
npm install
```

## Como configurar o banco de dados

Crie o banco de dados MySQL e as tabelas a seguir:

```
CREATE TABLE aluno ( 
	 id INT PRIMARY KEY AUTO_INCREMENT,  
	 nome VARCHAR(255) NOT null,
	 cpf VARCHAR(15) not null
)
```

Configure o banco de dados no ficheiro knex.ts (src/config/knex.ts):

```
const knexConfig: KnexConfig = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'desafio_7',
  },
};
```

## Como rodar os testes

Execute essa linha de código no terminal

```
  npm test
```


## Linguagens

- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io/pt-BR/)

