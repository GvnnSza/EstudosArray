// Todo tirar Ana e caio da lista e colocar Rodrigo

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo");

//! PODEMOS SIM USAR O nome.push("RODRIGO"), mas podemos colocar-lo dentro do splice que ele vai substituir os 2 indices e colocar um novo na lista

console.log(nomes);