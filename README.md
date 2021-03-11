<h1 align="center">
    <br>
    :bookmark_tabs: Omni Clients
</h1>

<h4 align="center">
  Sistema escalável de cadastro de usuários construído com Express & TypeORM :satellite:
</h4>

## :rocket: Tecnologias utilizadas

Este projeto foi desenvolvido por **Vinícius Coelho** como parte da resposta ao desafio proposto no processo de seleção para a vaga de *Software Engineer* da **Bemol Digital**, utilizando as seguintes tecnologias:

-  [NodeJS][nodejs]
-  [Express][express]
-  [TypeORM][typeorm]
-  [TypeScript][ts]
-  [Cors][cors]
-  [SQLite3][sqlite]
-  [Visual Studio Code][vc] com [EditorConfig][vceditconfig]

## :information_source: Como utilizar

Para clonar e rodar esta aplicação, voce vai precisar de [Git](https://git-scm.com), [Node.js v14.15.4+][nodejs] e [Yarn v1.22+][yarn] instalados na sua máquina.
A aplicação utiliza SQLite como banco de dados, e todos os dados são armazenados no arquivo `src/database/database.sql`. Caso queira utilizar um arquivo diferente, lembre-se de atualizar o caminho relativo na chave *database* do arquivo de configuração `ormconfig.js`

No seu Terminal ou Console, siga os passos:

```bash
# Clone este repositório
$ git clone https://github.com/vini-coelho/omni-clients-api

# Entre no repositório
$ cd omni-clients-api

# Instale as dependências
$ yarn install

# inicie o servidor de desenvolvimento
$ yarn dev
```


A API ficará disponível no endereço http://localhost:3333

## :rocket: Endpoints

---

### **1. Listar Usuarios Cadastrados**
  Retorna lista de usuários cadastrados no banco de dados em formato JSON.

* **URL**

  /users

* **Method:**

  `GET`

*  **URL Params**

    None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    ```json
    [
      {
        "id":1,
        "first_name":"Vinicius",
        "last_name":"Coelho",
        "age":21,
        "email":"vinicius_coelho@live.com",
        "phone":"(92) 98811-2989",
        "cep":"69008-110",
        "logradouro":"Rua Nova Mutum",
        "complemento":"",
        "number":"57",
        "bairro":"Colônia Antônio Aleixo",
        "localidade":"Manaus",
        "uf":"AM",
        "created_at":"2021-03-10T23:54:32.000Z",
        "updated_at":"2021-03-10T23:54:32.000Z"
      }
    ]
    ```

* **Resposta de Erro:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

* **Exemplo de requisiçã0 com [Axios]([http://](https://github.com/axios/axios)):**

  ```ts
    const response = await api.get('/users');
    const users = response.data; // array de usuarios
  ```

  ### **2. Cadastrar novo Usuário**
  Salva um novo usuário no banco de dados e retorna os dados cadastrados, jutamente com um token JWT, em formato JSON.

* **URL**

  /users

* **Method:**

  `POST`

*  **URL Params**

    None

* **Data Params**

  ```json
      {
        "first_name":"Vinicius",
        "last_name":"Coelho",
        "age":21,
        "email":"vinicius_coelho@live.com",
        "phone":"(92) 98811-2989",
        "cep":"69008-110",
        "logradouro":"Rua Nova Mutum",
        "complemento":"", // Opcional
        "number":"57",
        "bairro":"Colônia Antônio Aleixo",
        "localidade":"Manaus",
        "uf":"AM"
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    ```json
    {
      "user": [
        {
          "id":1,
          "first_name":"Vinicius",
          "last_name":"Coelho",
          "age":21,
          "email":"vinicius_coelho@live.com",
          "phone":"(92) 98811-2989",
          "cep":"69008-110",
          "logradouro":"Rua Nova Mutum",
          "complemento":"",
          "number":"57",
          "bairro":"Colônia Antônio Aleixo",
          "localidade":"Manaus",
          "uf":"AM",
          "created_at":"2021-03-10T23:54:32.000Z",
          "updated_at":"2021-03-10T23:54:32.000Z"
        }
      ],
      "token": ""
    }
    ```

* **Resposta de Erro:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "User already exists" }`

* **Exemplo de requisiçã0 com [Axios]([http://](https://github.com/axios/axios)):**

  ```ts
    const response = await api.post('/users', {
        first_name:'Vinicius',
        last_name:'Coelho',
        age:21,
        email:'vinicius_coelho@live.com',
        phone:'(92) 98811-2989',
        cep:'69008-110',
        logradouro:'Rua Nova Mutum',
        complemento:'',
        number:'57',
        bairro:'Colônia Antônio Aleixo',
        localidade:'Manaus',
        uf:'AM'
    });
    const { user, token } = response.data;
  ```

---

Made with ♥ by Vinicius Coelho :wave: [Get in touch!](https://www.linkedin.com/in/viniciustcoelho/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[npm]: https://www.npmjs.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-**eslint**
[express]: https://expressjs.com/
[typeorm]: https://typeorm.io/
[ts]: https://www.typescriptlang.org/
[sqlite]: https://www.sqlite.org/
[cors]: https://www.npmjs.com/package/cors
