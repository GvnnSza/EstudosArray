const nomes = ["ana Julia", "Caio vinicius" , "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());
                            // * map = mapear um array e retornar um novo array com os dados transformados

                            // * toUpperCase = transforma o texto em maiusculo

                            // * return nao foi necessario pois a arrow function ja retorna o valor automaticamente com o codigo: =>

console.log(nomesPadronizados);