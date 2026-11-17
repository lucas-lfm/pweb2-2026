const elTitulo = document.getElementById("titulo-principal");
elTitulo.innerText = "PWEB II - ADS";

elTitulo.classList.add("titulo");
elTitulo.style.backgroundColor = "#000";

const div = document.querySelector("#div");
// div.innerHTML = `<h3 style='color: red'>Tópicos estudados:</h3>
//                <p>DOM; Métodos de seleção; Métodos de criação; etc.</p>`;

const titulo3 = document.createElement("h3");
titulo3.innerText = "Tópicos estudados:";
titulo3.style.color = "red";

const parag = document.createElement("p");
parag.innerText = "DOM; Métodos de seleção; Métodos de criação; etc.";

div.appendChild(titulo3);
div.appendChild(parag);

const btnTopicos = document.getElementById("btn-topicos");
// btnTopicos.onclick = () => {
//   div.style.display = "none";
// };

btnTopicos.addEventListener("click", () => {
  div.style.display = "none";
});