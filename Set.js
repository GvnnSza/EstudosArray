const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = [...new Set(nomes)];
                            //* new Set() retorna um objeto Set que representa um conjunto de elementos (não aceita elementos repetidos)
                            //* ...new Set() é o spread operator que copia todos os elementos do objeto Set para o novo array nomesAtualizados
                            //? nomesAtualizados é o novo array que recebe todos os elementos do objeto Set (que não aceita elementos repetidos)


console.log(nomesAtualizados);