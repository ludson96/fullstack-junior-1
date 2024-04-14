# Repositório `Desafio Técnico - Full Stack Junior` 🧑🏾‍💻

Repositório possuí projeto desenvolvido para o `Desafio Técnico - Full Stack Junior`, para a empresa `NaranjaLabs`.

## Informações pessoais

- Nome: Ludson Pereira dos Santos.
- Linkedin: [![Linkedin-logo]][Linkedin-url]
- Github: @ludson96 [![GitHub-logo]][GitHub-url]
- Telefone: (21) 99108-1759 [![WhatsApp-logo]][WhatsApp-url]
- Email: ludson_ps27@hotmail.com  [![Hotmail-logo]][Hotmail-url]

## Informações de escolha de desenvolvimento

- Fiz a interatividade e animação como se fosse em uma pagina real, no caso o menu está com a "borda" inferior conforme passa o mouse, também usei as mesma informações de cor, espaçamento e tamanho do hero, mesmo eu querendo colocar o tamanho da palavra toda;

- A cada pagina selecionada ele altera a cor do menu selecionado, mas como não tem nenhuma pagina além da home, irá exibir not found, mas fiz como se fosse implementar no futuro.

## Linguagens e ferramentas usadas

[![Git][Git-logo]][Git-url]
[![ESLint][ESLint-logo]][ESLint-url]
[![Next.js][Next.js-logo]][Next.js-url]
[![Tailwind-CSS][Tailwind-CSS-logo]][Tailwind-CSS-url]
[![TypeScript][TypeScript-logo]][TypeScript-url]

## O que foi desenvolvido
   
Em front end para provar os conhecimento em `Next.js` tinha a escolha de desenvolver um dos heroes a seguir: [Heroes](https://encurtador.com.br/buzKZ).

Em Back end desenvolvi rotas utilizando Next.js.

Tanto o front-end quanto o back-end foram feitos no mesmo projeto do Next.js.

## Instruções para instalar e rodar

<details>

1. Clone o repositório (recomendado usar em SSH) e entre na pasta:

    ```bash
    git clone https://github.com/ludson96/fullstack-junior-1

    cd fullstack-junior-1
    ```

1. Instale as dependências:

    ```bash
    npm install
    ```

1. Execute a aplicação em modo de `desenvolvimento`:

    ```bash
      npm run dev
    ```
1. Para testar as rotas, deve haver uma instância em execução, utilize algum API Rest Client, recomento usar o [thunder client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client). Há um arquivo `collection_Naranja Labs.json` com a coleção contendo todas as rotas, basta importá-lo e executar as rotas:

</details>

## Detalhamento de execução

<details>

  <summary><strong>Jobs (Job)</strong></summary>

#### Todas as rotas recebem um secret

Caso o secret seja diferente de "naranja-labs", retorna status HTTP 401 (Unauthorized) e a mensagem `"Secret provided is invalid. Make sure the correct secret is being sent`

### Endpoints

### 1. `GET /jobs`

<details>
  <summary>Retorna todos os jobs do arquivo jobs.ts</summary><br />

Funciona da seguinte forma:

- `/jobs` (`GET`)
   - retorna um json com status 200 e um array com todas as informações do jobs.
     - Exemplo de resposta:
        ```json
        [
          {
            "id": 1,
            "job": "Full Stack Developer",
            "level": "Junior",
            "status": "open"
          },
          {
            "id": 2,
            "job": "Frontend Developer",
            "level": "Junior",
            "status": "closed"
          },
          {
            "id": 3,
            "job": "Backend Developer",
            "level": "Junior",
            "status": "closed"
          },
          {
            "id": 4,
            "job": "Full Stack Developer",
            "level": "Senior",
            "status": "closed"
          }
        ]
        ```

</details>

### 2. `GET /jobs?level=Junior`

<details>
  <summary>Retorna todos os jobs do arquivo jobs.ts com o level=Junior</summary><br />

Funciona da seguinte forma:

- `/jobs?level=Junior` (`GET`)
   - retorna um json com status 200 e um array com todos os jobs level junior.
     - Exemplo de resposta:
        ```json
        [
          {
            "id": 1,
            "job": "Full Stack Developer",
            "level": "Junior",
            "status": "open"
          },
          {
            "id": 2,
            "job": "Frontend Developer",
            "level": "Junior",
            "status": "closed"
          },
          {
            "id": 3,
            "job": "Backend Developer",
            "level": "Junior",
            "status": "closed"
          }
        ]
        ```

</details>

### 3. `GET /job/[id]`

<details>
  <summary>Retorna informações de um job específico</summary><br />

Funciona da seguinte forma:

- `/job/[id]` (`GET`):
   - recebe um `id` pelo caminho da rota e retorna o job com esse `id`.
     - Exemplo de resposta para a rota `/job/3` (supondo que exista um job com `id = 3`):

        ```json
        {
          "id": 3,
          "job": "Backend Developer",
          "level": "Junior",
          "status": "closed"
        }
        ```
    - caso não tenha sido informado um `id`, a rota retorna o status HTTP 400 com a
     mensagem `Job ID is required.` no corpo da resposta.
    - caso tenha sido informado algo diferente de um número no lugar do`id`, a rota retorna o status HTTP 404 com a mensagem `ID must be a number.` no corpo da resposta.
    - caso não exista um job com esse `id`, a rota retorna o status HTTP 404 com a
     mensagem `Job ID not found.` no corpo da resposta.

</details>

### 4. `POST /job/submit`

<details>
  <summary>Cria um novo cadastro</summary><br />

Funciona da seguinte forma:

- `/job/submit` (`POST`)
   - deve receber via corpo do POST os dados de um cadastro. 
     - Exemplo de requisição:
        ```json
        {
          "name": "Ludson",
          "age": 25,
          "phone": "(21) 99999-9999",
          "state":"RJ",
          "city": "Duque de Caxias"
        }
        ```
   - em caso de sucesso:
      - retorna o status HTTP 201 (CREATED) e uma mensagem conforme abaixo. 
        - Exemplo de resposta:

        ```json
        {
          "message": "Thank you for your application, Ludson."
        }
        ```
    - todo so campos do body são obrigatórios e validados de acordo com seu tipo.
      - caso não seja enviado nada no corpo da requisição retorna status HTTP 400 e uma mensagem conforme abaixo:

        ```json
        {
          "message": "Request body is empty. Please provide the required data in the request body."
        }
        ```

</details>

</details>

[Git-logo]: https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[Git-url]: https://git-scm.com
[ESLint-logo]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[ESLint-url]: https://eslint.org/
[Next.js-logo]: https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white
[Next.js-url]: https://nextjs.org/
[TypeScript-logo]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Tailwind-CSS-logo]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-CSS-url]: https://tailwindcss.com/
[Linkedin-logo]: https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white
[Linkedin-url]: https://www.linkedin.com/in/ludson96/
[GitHub-logo]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[GitHub-url]: https://github.com/ludson96
[Hotmail-logo]: https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white
[Hotmail-url]: mailto:ludson_ps27@hotmail.com
[WhatsApp-logo]: https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white
[WhatsApp-url]: https://wa.me/5521991081759?text=Ol%C3%A1%2C+Ludson.+Vi+seu+perfil+no+GitHub