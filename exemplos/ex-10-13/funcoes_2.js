// Função com parâmetro default
const calcularDesconto =
          (preco, desconto = 0.1) => preco * desconto;

console.log(calcularDesconto(200));
console.log(calcularDesconto(200, 0.2));

/*
* Função com parâmetro rest
* A função somatorio recebe um número indefinido de argumentos,
* que são armazenados em um array chamado numeros, dentro da função.
**/
const somatorio = (...numeros) => {
  let soma = 0;
  for (let n of numeros) {
    soma += n;
  }
  return soma;
}

somatorio(5, 6, 10, 29, 23, 345);