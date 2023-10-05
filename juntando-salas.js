// TODO Juntar as salas JS e PY

const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];


// ! .concat => Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação / Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array

const salasUnificadas = salaJS.concat(salaPython);

console.log(salasUnificadas)