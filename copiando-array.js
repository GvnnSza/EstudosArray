const notas = [7, 7, 8, 9];

const novaNotas = [...notas, 10]; 
                    //? ...notas é o spread operator, que copia todos os elementos do array notas para o novo array novaNotas (que também recebe o elemento 10)
                    // ...notas é o mesmo que 7, 7, 8, 9 (todos os elementos do array notas) 
                    //? novaNotas é o novo array que recebe todos os elementos do array notas e também o elemento 10 (que não existia no array notas) 

console.log(`As novas notas sao: ${novaNotas}`); 
            // [ 7, 7, 8, 9, 10 ] COM o elemento 10 no novo array novaNotas

console.log(`As notas originais sao: ${notas}`); 
            // [ 7, 7, 8, 9 ] Original array notas não é alterado