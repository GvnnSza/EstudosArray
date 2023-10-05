// * Metodo 1 - Função anonima dentro do forEach 

const nomes = ["Gabriel", "Giovani", "Alfred"];

nomes.forEach(function(nome) {
    console.log(nome);
});

// ! -----------------------------------------------------------------------------------------------------------------------------------------------

// * Metodo 2 - Arrow function dentro do forEach 

nomes.forEach((nome) => {
    console.log(nome);
});

// ! -----------------------------------------------------------------------------------------------------------------------------------------------

// * Metodo 3 - Arrow function dentro do forEach com uma linha de codigo    

function imprimeNome(nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);