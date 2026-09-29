console.log("Script externo!");

const nome = prompt("Digite seu nome");

const elTitulo = document.getElementById("titulo");
elTitulo.textContent = `Seja bem-vindo, ${nome}`;

nome = "João";
