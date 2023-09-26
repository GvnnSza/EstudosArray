// Objetivo: exercicio de concatenação de arrays

const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat)    // [ 'Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda', 'Ricardo', 'Ana', 'Marcelo', 'Bia' ] 
                            // ? concatena os arrays

console.log(arrayOriginal) // [ 'Maria', 'Carlos', 'Eduardo', 'Samanta' ]
                            // ! não altera o array original

// ! -----------------------------------------------------------------------------------------------------------------------------------------------------------

const arrayOriginal1 = [50, 60, 70]
const arrayConcat1 = arrayOriginal.concat([80, [90, 100]])

console.log(arrayConcat1) // [ 50, 60, 70, 80, [ 90, 100 ] ]
                            // ? concatena os arrays
                            
console.log(arrayOriginal) // [ 50, 60, 70 ]
                            // ! não altera o array original