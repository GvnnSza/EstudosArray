// TODO 1) Criar uma lista que contem as duas listas de aluno e medias e mostrar a lista completa

const alunos = ['João', 'Juliana', 'Ana' , 'Caio'];
const mediaDosAlunos = [10, 8, 7.5, 9];

const listaDeNotasEAlunos = [alunos, mediaDosAlunos];

console.log(listaDeNotasEAlunos)

// ! 1) a cima é a concatenação de duas listas em uma só

// ** ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// TODO 2) Criar uma lista que contem as duas listas de aluno e medias e mostrar o nome do aluno e sua media

const alunos2 = ['João', 'Juliana', 'Ana' , 'Caio'];
const mediaDosAlunos2 = [10, 8, 7.5, 9];

const listaDeNotasEAlunos2 = [alunos2, mediaDosAlunos2];

console.log(`A Aluna da posicao 1 é ${listaDeNotasEAlunos2[0][1]} e sua media é ${listaDeNotasEAlunos2[1][1]}`)

// ! 2) a cima é a concatenação de duas listas em uma só e mostrando o nome do aluno e sua media
        // ? Lista de Notas e Alunos [0][1] e [1][1] são as posições das listas (0(nome) e 1(media)) (1(media dos alunos) e 1(posição do aluno))

// ** ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Todo Desafio
    // todo criar uma função que recebe a lista de alunos e a lista de médias como parâmetros e retorna a média de cada aluno. Você pode utilizar a lógica de acesso de valores em listas de duas dimensões para percorrer as listas e calcular a média de cada aluno.

const alunos3 = ['João', 'Juliana', 'Ana' , 'Caio'];
const mediaDosAlunos3 = [10, 8, 7.5, 9];

function mediaAlunos (nomes, medias) {
    for (let i = 0; i < nomes.length; i++) {
        console.log(`${nomes[i]} - ${medias[i]}`)
    }
}

mediaAlunos(alunos3, mediaDosAlunos3);

console.log(`A media do aluno ${alunos3[0]} é ${mediaDosAlunos3[0]}`)

// ! DESAFIO) a cima é a concatenação de duas listas em uma só e mostrando o nome do aluno e sua media