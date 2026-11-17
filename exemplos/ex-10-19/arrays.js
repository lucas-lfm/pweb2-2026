const carros = ["Toro", "HB20", "Corolla", "Mercedes Benz"];

let removido = carros.pop();
console.table(carros);

carros.push("Cadilac");
console.table(carros);

// Método slice(start, end)
console.table(carros.slice(1, 3));

// Método splice(indice, qtd_remover, elementos_inserir)
carros.splice(2, 0, "Creta"); // adiciona "Creta" no indice 2
console.table(carros);

// removendo "HB20" (indice 1) e inserindo "Hilux" neste indice 
carros.splice(1, 1, "Hilux"); 

carros.splice(3, 1); // remove o elemento no índice 3
console.table(carros);