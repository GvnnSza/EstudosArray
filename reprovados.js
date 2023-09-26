const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5 , 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => { 
                    //* filter() retorna um novo array com os elementos que atendem a condição passada na função callback (true ou false)
    return medias[indice] < 7;
});

console.log(`Alunos reprovados: ${reprovados}`);