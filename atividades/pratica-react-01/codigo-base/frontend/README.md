# Frontend simples de anúncios automotivos com React

> 🚗 Este é um frontend simples para exibir anúncios automotivos, consumindo uma API RESTful criada com json-server. O projeto do backend encontra-se neste repositório, na pasta [backend](../backend/).

---

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm instalados em sua máquina. Você pode baixá-los em https://nodejs.org/.

## Instalação

1. Clone este repositório e entre na pasta do projeto do frontend:
  ```bash
  git clone https://github.com/lucas-lfm/pweb2-2025.2-base.git
  cd pweb2-2025.2-base/atividades/pratica-react-01/codigo-base/frontend
  ```

2. Instale as dependências do projeto:
  ```bash
  npm install
  ```

## Uso

1. Inicie o aplicativo React:
  
    ```bash
    npm run dev
    ```

2. O aplicativo estará rodando em `http://localhost:5173`. Abra este endereço no seu navegador para visualizar o frontend.

3. Certifique-se de que o servidor json-server do backend esteja em execução para que o frontend possa consumir a API de anúncios.

4. Para parar o aplicativo, pressione `Ctrl + C` no terminal.

## Funcionalidades implementadas até o momento

- Exibe uma lista de anúncios automotivos consumidos da API RESTful.
- Cada anúncio mostra detalhes como marca, modelo, quilometragem, categoria, ano e preço.
- Permite a busca de anúncios por modelo.
- Interface simples e intuitiva para navegação.

  ![Captura de tela do aplicativo React exibindo anúncios automotivos](./../../img-instrucoes/screen-pratica-01.png)

## Conceitos de React e Consumo de API abordados

- Componentes funcionais
- Hooks (useState, useEffect)
- Consumo de API com fetch
- Renderização condicional
- Manipulação de listas e chaves em React
- Gerenciamento de estado local

## Próximos passos sugeridos

- Implementar a funcionalidade de cadastro de novos anúncios.
- Adicionar a funcionalidade de edição e exclusão de anúncios.
- Melhorar o design da interface com CSS ou bibliotecas como Tailwind CSS ou Material-UI.
- Implementar a tela de detalhes do anúncio ao clicar em um item da lista (usando React Router).