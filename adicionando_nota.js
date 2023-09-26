// ! DESAFIO
    // TODO um professor acidentalmente passou apenas 3 das 4 notas no sistema para um aluno (10, 6, 8)
        // TODO para corrigir, adicione a nota 7 e faça o calculo da media correta

const notas = [10, 6, 8];

// ! PRA COLOCAR A NOTA QUE FALTA É SO COLOCAR O COMANDO: notas.push(7)
    //? Para verificar se foi adicionado o push, so colocar o console.log(notas)
notas.push(7);

console.log(notas);
                                                // ? Nota atribuida ao 7 que foi colocada pelo .push 
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

    console.log(`A media do aluno é ${media}`);