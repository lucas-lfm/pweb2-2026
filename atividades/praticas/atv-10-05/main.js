while (true) {
  let inicio = Number(prompt("Digite o número de início:"));
  let fim = Number(prompt("Digite o número de fim:"));
  let somaImpares = 0;

  if (inicio > fim) {
    let aux = inicio;
    inicio = fim;
    fim = aux;
  }

  if (fim - inicio < 10) {
    console.log("A diferença entre os números deve ser pelo menos 10.");
    continue;
  }

  if (inicio % 2 === 0) {
    inicio++;
  }

  let quantidadeImpares = 0;

  for (let i = inicio; i <= fim && quantidadeImpares < 5; i += 2) {
    somaImpares += i;
    quantidadeImpares++;
  }

  console.log("A soma dos números ímpares é: " + somaImpares);

  break;
}