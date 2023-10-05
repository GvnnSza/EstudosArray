let num1 = 10;
let num2 = num1;

num2 += 5;
num1 += 1;

console.log(`Num1 é ${num1}. Num2 é ${num2}`);

//* Num1 é 11. Num2 é 15 (num1 não é alterado, pois num2 recebeu uma cópia do valor de num1) 

// ! -------------------------------------------------------------------------------------------------------------------------------------------------

let numeroOriginal = 10;

function alteraNumero(numero) {
  numero = 50;

  console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
}

alteraNumero(numeroOriginal);

//* numero do parâmetro é 50. numeroOriginal é 10 (numeroOriginal não é alterado, pois numero recebeu uma cópia do valor de numeroOriginal)

//* numeroOriginal é uma variável global, pois foi declarada fora da função alteraNumero() e pode ser acessada de qualquer lugar do código (escopo global)

//* numero é uma variável local, pois foi declarada dentro da função alteraNumero() e só pode ser acessada dentro da função (escopo local) 

// ! -------------------------------------------------------------------------------------------------------------------------------------------------