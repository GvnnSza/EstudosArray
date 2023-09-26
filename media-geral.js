const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notaDaSala) {;
    const somaDasNotas = notaDaSala.reduce((acumulador, nota) => acumulador + nota, 0);
                        //* notaDaSalas.reduce() retorna um único valor com base em todos os elementos do array (soma de todos os elementos)
                        //* acumulador é o valor retornado a cada iteração e nota é o valor do elemento atual do array (0 é o valor inicial do acumulador)

    const media = somaDasNotas / notaDaSala.length;

    return media;

}

console.log(`Média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`Média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`Média da sala de Python é ${calculaMedia(salaPython)}`);