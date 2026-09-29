# Backend simples de anúncios automotivos com json-server

> ✨ Este é um backend simples para gerenciar anúncios, construído com Node.js e json-server (https://www.npmjs.com/package/json-server/v/0.17.4). Criado para a disciplina de Programação Web II a fim de facilitar o aprendizado prático do consumo de APIs REST. Ele permite criar, ler, atualizar e excluir anúncios.

---

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm instalados em sua máquina. Você pode baixá-los em https://nodejs.org/.

## Instalação

1. Clone este repositório e entre na pasta do projeto do backend:
  ```bash
  git clone https://github.com/lucas-lfm/pweb2-2025.2-base.git
  cd pweb2-2025.2-base/atividades/pratica-react-01/codigo-base/backend
  ```

2. Instale as dependências do projeto:
  ```bash
  npm install
  ```

3. Perceba no arquivo `package.json` que a dependência `json-server` está listada em `devDependencies`, visto que é uma dependência de desenvolvimento. O script `start` já está configurado para iniciar o servidor json-server.

4. Perceba também que o projeto utiliza a versão `0.17.4` do json-server, conforme especificado no link: https://www.npmjs.com/package/json-server/v/0.17.4. Essa é a versão recomendada (no momento) para garantir compatibilidade e estabilidade.

## Uso

1. Inicie o servidor json-server:
  
    ```bash
    npm run start
    ```

2. O servidor estará rodando em `http://localhost:3000`. Você pode acessar a API de anúncios através do endpoint:
  ```http://localhost:3000/anuncios```

3. Você pode usar ferramentas como `Postman` ou `Insomnia` para testar os endpoints da API.

4. Para parar o servidor, pressione `Ctrl + C` no terminal.

5. Os dados dos anúncios são armazenados no arquivo `db.json`. Você pode editar este arquivo diretamente para adicionar, modificar ou remover anúncios, mas tenha cuidado para manter a estrutura JSON válida.

## Endpoints disponíveis

- `GET /anuncios`: Retorna todos os anúncios.

- `GET /anuncios/:id`: Retorna um anúncio específico pelo ID.

- `POST /anuncios`: Cria um novo anúncio.
  - Corpo da requisição deve conter os campos necessários para o anúncio.
  - Exemplo de corpo da requisição:
    ```json
    {
      "brand": "Toyota",
      "model": "Hilux",
      "km": 100.000,
      "category": "Picape",
      "year": 2019,
      "price": 155.000
    }
    ```

- `PUT /anuncios/:id`: Atualiza um anúncio existente pelo ID.
  - Corpo da requisição deve conter os campos atualizados do anúncio.
  - Exemplo de corpo da requisição:
    ```json
    {
      "brand": "Toyota",
      "model": "Hilux",
      "km": 95.000,
      "category": "Picape",
      "year": 2019,
      "price": 150.000
    }
    ```

- `DELETE /anuncios/:id`: Exclui um anúncio pelo ID.

- `GET /anuncios?brand=Toyota`: Filtra anúncios pela marca.

- `GET /anuncios?year_gte=2015&year_lte=2020`: Filtra anúncios por intervalo de ano.

- `GET /anuncios?model_like=Corolla`: Filtra anúncios pelo modelo (busca parcial, case-insensitive e regex).

> 🔗 Acesse [npmjs.com/package/json-server/v/0.17.4](https://www.npmjs.com/package/json-server/v/0.17.4) para mais detalhes sobre o json-server.

## Consumo da API

- Você pode consumir esta API em qualquer aplicação frontend que suporte requisições HTTP, com JavaScript puro ou com frameworks como React, Angular, Vue.js, etc.

- Exemplo de requisição usando fetch em JavaScript:
  ```javascript
  async function fetchAnuncios() {
    const response = await fetch('http://localhost:3000/anuncios');
    const anuncios = await response.json();
    console.log(anuncios);
  }

  fetchAnuncios();
  ```

- Exemplo usando React:
  ```javascript
  import { useEffect, useState } from 'react';

  function AnunciosList() {
    const [anuncios, setAnuncios] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/anuncios')
        .then(response => response.json())
        .then(data => setAnuncios(data));
    }, []);

    return (
      <div>
        <h1>Lista de Anúncios</h1>
        <ul>
          {anuncios.map(anuncio => (
            <li key={anuncio.id}>{anuncio.brand} - {anuncio.model}</li>
          ))}
        </ul>
      </div>
    );
  }

  export default AnunciosList;
  ```