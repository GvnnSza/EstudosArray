// Todo Desafio
    // todo criar uma função que recebe a lista de alunos e a lista de médias como parâmetros e retorna a média de cada aluno. Você pode utilizar a lógica de acesso de valores em listas de duas dimensões para percorrer as listas e calcular a média de cada aluno.

// * Declaramos um array "alunos" com os nomes dos alunos.
const alunos = ['João', 'Juliana', 'Ana' , 'Caio'];

// * Declaramos um array "mediaDosAlunos" com as notas dos alunos.
const mediaDosAlunos = [10, 8, 7.5, 9];

// * Criamos uma função "mediaAlunos" que recebe dois parâmetros "nomes" e "medias".
function mediaAlunos (nomes, medias) {

    // * Criamos um laço de repetição "for" que vai percorrer o array "nomes".
        // ? index é o contador do laço de repetição. Ele vai começar com 0 e vai até o tamanho do array "nomes".
        // ? index < nomes.length é a condição de parada do laço de repetição. Ele vai parar quando o contador for igual ao tamanho do array "nomes". Se o tamanho do array "nomes" for 4, o contador vai até 3.
        // ? index++ é o incremento do laço de repetição. Ele vai somar 1 ao contador a cada repetição do laço de repetição. Se o contador for 0, ele vai somar 1 e o contador vai ser 1. Se o contador for 1, ele vai somar 1 e o contador vai ser 2. E assim por diante.
    for (let index = 0; index < nomes.length; index++) {

        //* A cada repet   ção do laço de repetição, o console vai mostrar o nome do aluno e sua média.
        console.log(`${nomes[index]} - ${medias[index]}`)
    }
}

//* Chamamos a função "mediaAlunos" e passamos os parâmetros "alunos" e "mediaDosAlunos".
mediaAlunos(alunos, mediaDosAlunos);

// * Chamamos o console para mostrar o nome do aluno e sua média.
console.log(`A media do aluno ${alunos[0]} é ${mediaDosAlunos[0]}`)

// ! DESAFIO) a cima é a concatenação de duas listas em uma só e mostrando o nome do aluno e sua media