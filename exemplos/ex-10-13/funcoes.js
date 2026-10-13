setInterval(() => console.log('Executando callback...'), 2000);

// Função tradicional
function execucao() {
  console.log('Executando função...');
}

/*
* Função anônima
* Aqui estamos usando uma expressão de função anônima, 
* que é atribuída a uma variável chamada execucaoExpressao.
**/
const execucaoExpressao = function () {
  console.log('Executando função...');
};

// Arrow function (função de seta)
const execucaoArrow = () => console.log("Executando função...");

function quadrado(x) {
  return x * x;
}

/*
* Arrow Function traz uma sintaxe simplificada para funções de uma única linha,
* onde o return é implícito.
* No exemplo abaixo, a função quadradoArrow recebe um parâmetro x e retorna o valor de x multiplicado por ele mesmo.
* Perceba que, como a função possui apenas uma linha, não é necessário utilizar as chaves {} nem a palavra-chave return.
* Além disso, perceba que quando há somente um parâmetro, não é necessário utilizar os parênteses () ao redor do parâmetro.
**/
const quadradoArrow = x => x * x;
