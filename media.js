// TODO Modo basico de fazer media de alunos - SEM ARRAY

const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5

const media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(media)

// ! -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// TODO Media de nota COM ARRAY


//* Posicoes
//             0    1   2   3
const notas = [10, 6.5, 8, 7.5];

const mediaNota = (notas[0] + notas[1] + notas[2] + notas[3]) / 4; // * O 4 pode ser substituido pelo comando: notas.length;
                                                                       // ! (ESSE É O TAMANHO DO ARRAY INVES DE CONTARQUANTAS VARIAVEIS TEM, NO CASO 4 NOTAS)

console.log(mediaNota);

console.log(notas[3]);