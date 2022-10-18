# Schedule---Back
A ideia desta aplicação é a disponibilização da agenda de profissionais com potenciais clientes. 
Uma outra aplicação está sendo desenvolvida para o cadastro de profissionais.

## :clipboard: Descrição
Imagine que você está de férias em uma cidade diferente e precisa urgentemente de um pediatra, ou algo menos urgente, como cortar o cabelo, mas você não
sabe onde encontrar. Schedule vem para sanar essa dor, uma enciclopédia de profissionais de diversas áreas onde você pode filtrar pela cidade e pelo 
serviço prestado.

---

## :computer: Tecnologias e Conceitos

- REST APIs
- JWTs tokens
- Node.js
- TypeScript
- Testes de integração
- PostgresSQL com Prisma ORM

---

## :rocket: Rotas

```yml
POST /sign-up
    - Rota para registrar novo usuário
    - headers: {}
    - body:{
        "name": "lorem",
        "email": "lorem@gmail.com",
        "profilePic": "https://loremipsum.com", 
        "password": "loremipsum",
      }
```

```yml
POST /sign-in
    - Rota para logar usuário
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "password": "loremipsum"
     }
```

```yml
GET /services
    - Rota para pegar todos os tipos de serviços cadastrados 
    - headers: {}
    - body: {}
```

```yml
GET /cities
    - Rota para pegar todas as cidades que possuem profissionais cadastrados
    - headers: {}
    - body: {}
```


```yml
GET /professionals
    - Rota para pegar profissionais sem filtrar por profissão
    - headers: {}
    - body: {}
```

```yml
GET /professionals/:service
    - Rota para pegar profissionais filtrando pelo parâmetro "service"
    - headers: {}
    - body: {}
```

```yml
GET /professional/:id
    - Rota para pegar profissionail pelo id 
    - headers: {}
    - body: {}
```

As rotas "/professionals" e "/professionals/:service" possuem o query param "?city=cityId", que filtra os profissionais pela cidade, se nenhum parâmetro 
for passado, é filtrado os profissionais pela cidade de id = 1 (caso você rode o comando de seed, para popular o banco de dados com dados fictícios, 
a cidade de id 1 será Campinas).

---

## 🏁 Rodando a aplicação

Certifique-se que você possui a última versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Clone este repositório em sua máquina:

```
git clone https://github.com/phbodias/Schedule---Back.git
```

Dentro da pasta do projeto, rode o seguinte comando para instalar as dependências necessárias:
```
npm install
```

Crie e configure um arquivo ".env", com base no arquivo ".env-example"

Caso você queira popular seu banco de dados com dados fictícios, há também um comando seed disponível.

Feito isso, rode a aplicação com:

```
npm start
```
---

O repositório front-end da aplicação pode ser encontrado em [front](https://github.com/phbodias/Schedule---Front).

