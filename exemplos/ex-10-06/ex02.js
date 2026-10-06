const produtos = [
  { id: 1, nome: "Produto 1", preco: 10.99 },
  { id: 2, nome: "Produto 2", preco: 20.99 },
  { id: 3, nome: "Produto 3", preco: 30.99 }
];

function exibirProdutos(produtos) {
  console.table(produtos);
}

// Short-circuit evaluation
// Verifica se a variável produtos existe e não é nula 
// antes de chamar a função exibirProdutos
produtos && exibirProdutos(produtos);  