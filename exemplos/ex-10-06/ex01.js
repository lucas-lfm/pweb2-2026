console.log(sum(1, 2));

function sum(a, b) {
  return a + b;
}

let idade = 20;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// operador ternário
// sinataxe: (condição) ? expressão_true : expressão_false
(idade >= 18) ? console.log("Você é maior de idade.")
                : console.log("Você é menor de idade.");