const numeros = [100 , 200 , 300 , 400 , 500 , 600];

// TODO Primeira expressao let indice = 0 é executada uma vez antes do inicio do loop
// TODO Segunda expressao indice < numeros.length é testada no inicio de cada iteracao do loop
// TODO Terceira expressao indice++ é executada no final de cada iteracao do loop

// for (let indice = 0; indice < numeros.length; indice++){
//     console.log(numeros[indice])
// }


// TODO Desafio: criar um loop for que imprima cada elemento do array numeros em ordem inversa. Você pode começar pelo último elemento e ir decrementando o índice até chegar no primeiro elemento.

// ? Primeira expressao let indice = numeros.length - 1 é executada uma vez antes do inicio do loop é oque faz o loop começar do ultimo elemento
// ? Segunda expressao indice >= 0 é testada no inicio de cada iteracao do loop é oque faz o loop parar no primeiro elemento
// ? Terceira expressao indice-- é executada no final de cada iteracao do loop é oque faz o loop decrementar o indice

// for (let indice = numeros.length - 1; indice >= 0; indice--) {

//     // ! Quarta expressao console.log(numeros[indice]) é executada no final de cada iteracao do loop é oque faz o loop imprimir o elemento
//     console.log(numeros[indice])

// ! -----------------------------------------------------------------------------------------------------------------------------------------------------------

// TODO  Exemplo 1: Imprimir números de 1 a 5 no console:

for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  // * Neste exemplo, usamos um loop for para imprimir os números de 1 a 5 no console. O loop começa com i igual a 1 e continua enquanto i for menor ou igual a 5. A cada iteração, o valor de i é incrementado em 1. Isso imprimirá os números de 1 a 5 no console.

  // * i <= 5 é a condição de parada do loop for. O loop for continuará enquanto i for menor ou igual a 5. Quando i for maior que 5, o loop for será encerrado. Isso significa que o loop for será executado uma vez para cada número de 1 a 5. Quando i for igual a 6, o loop for será encerrado.

// ! -----------------------------------------------------------------------------------------------------------------------------------------------------------

// TODO Exemplo 2: Calcular a soma dos números de 1 a 10:

let soma = 0;
for (let i = 1; i <= 10; i++) {
  soma += i;
}
console.log("A soma dos números de 1 a 10 é:", soma);

// * Neste exemplo, usamos um loop for para calcular a soma dos números de 1 a 10. A variável soma é inicializada com 0 e, em seguida, o loop for é usado para adicionar cada número de 1 a 10 à variável soma. No final, a soma é impressa no console.

// * i <= 10 é a condição de parada do loop for. O loop for continuará enquanto i for menor ou igual a 10. Quando i for maior que 10, o loop for será encerrado.

// * leti i = 1 é a expressão de inicialização do loop for. O loop for começará com i igual a 1. A cada iteração, o valor de i será incrementado em 1. Isso significa que, na primeira iteração, i será igual a 1, na segunda iteração, i será igual a 2, e assim por diante. Quando i for maior que 10, o loop for será encerrado.

// ! -----------------------------------------------------------------------------------------------------------------------------------------------------------

// TODO Exemplo 3: Iterar por um array e imprimir seus elementos:

const frutas = ["Maçã", "Banana", "Laranja", "Morango"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// * Neste exemplo, usamos um loop for para percorrer o array frutas e imprimir cada elemento. O loop começa com i igual a 0 e continua enquanto i for menor que o comprimento do array frutas. Isso imprimirá cada elemento do array no console.

// * frutas.length é a condição de parada do loop for. O loop for continuará enquanto i for menor que o comprimento do array frutas. Quando i for igual ao comprimento do array frutas, o loop for será encerrado. Isso significa que o loop for será executado uma vez para cada elemento do array frutas.

// * let i = 0 é a expressão de inicialização do loop for. O loop for começará com i igual a 0. A cada iteração, o valor de i será incrementado em 1. Isso significa que, na primeira iteração, i será igual a 0, na segunda iteração, i será igual a 1, e assim por diante. Quando i for igual ao comprimento do array frutas, o loop for será encerrado. Isso significa que o loop for será executado uma vez para cada elemento do array frutas.