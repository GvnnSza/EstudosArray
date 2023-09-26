// TODO Crie uma funcao que recebe como argumento o nome do aluno
// TODO Verificar se o aluno esta presente na lista de alunos e retorne a media final que se encontra no mesmo indice do aluno
// TODO Caso o nome nao esteja na lista de alunos, retorne uma mensagem de erro informando que o aluno nao foi encontrado

const alunos = ["Maria", "Carlos", "Eduardo", "Samanta"];

const media = [7.5, 8.0, 9.0, 10.0];

// * verificar se o aluno esta presente na lista de alunos e retorne a media final que se encontra no mesmo indice do aluno
const listaDeAlunosEMedias = [alunos, media];

// * funcao que recebe como argumento o nome do aluno
function exibeNomeENota (aluno){

    // ? pra verificar se o aluno esta presente na lista de alunos // .includes(aluno) = Maria
    if (listaDeAlunosEMedias[0].includes(aluno)){

        // ! codigo que retorna a media final que se encontra no mesmo indice do aluno
        const [alunos, medias] = listaDeAlunosEMedias;

        // ! codigo que verifica se o aluno esta presente na lista de alunos
        const indice = alunos.indexOf(aluno);
        

        // ! codigo que retorna a media final que se encontra no mesmo indice do aluno
        const mediaDoAluno = medias[indice];

        // ! imprimir a media do aluno
        console.log(`O(a) aluno ${aluno} tem a media ${mediaDoAluno}`);

        // ! Caso o nome nao esteja na lista de alunos, retorne uma mensagem de erro informando que o aluno nao foi encontrado
    } else {

        // ! Caso o nome nao esteja na lista de alunos, retorne uma mensagem de erro informando que o aluno nao foi encontrado
        console.log("Aluno nao encontrado")
    }

}

// *exibeNomeENota("Maria")
exibeNomeENota("Maria")