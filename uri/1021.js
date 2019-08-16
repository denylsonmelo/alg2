/*
Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.
*/

var entrada = require('readline-sync');
var valorLido = entrada.question();
valorLido = parseFloat(valorLido); 

var nota100 = Math.trunc(valorLido / 100);
var nota50 = Math.trunc(valorLido % 100 / 50); // operador mod
var nota20 = Math.trunc(valorLido % 100 % 50 / 20);
var nota10 = Math.trunc(valorLido % 100 % 50 % 20 / 10);
var nota5 = Math.trunc(valorLido % 100 % 50 % 20 % 10 / 5);
var nota2 = Math.trunc(valorLido % 100 % 50 % 20 % 10 % 5 / 2);
var moeda1 = Math.trunc(valorLido % 100 % 50 % 20 % 10 % 5 % 2 / 1);
var moeda50 = Math.trunc(valorLido % 100 % 50 % 20 % 10 % 5 % 2 % 1 / 0.5);
var moeda25 = Math.trunc(valorLido % 100 % 50 % 20 % 10 % 5 % 2 % 1 % 0.5 / 0.25);
var moeda10 = Math.trunc(valorLido % 100 % 50 % 20 % 10 % 5 % 2 % 1 % 0.5 % 0.25 / 0.1);
var moeda05 = Math.trunc(valorLido % 100 % 50 % 20 % 10 % 5 % 2 % 1 % 0.5 % 0.25 % 0.1 / 0.05);
var moeda01 = Math.trunc(valorLido % 100 % 50 % 20 % 10 % 5 % 2 % 1 % 0.5 % 0.25 % 0.1 % 0.05 / 0.01);

console.log('NOTAS:');
console.log(nota100 + ' nota(s) de R$ 100.00');
console.log(nota50 + ' nota(s) de R$ 50.00');
console.log(nota20 + ' nota(s) de R$ 20.00');
console.log(nota10 + ' nota(s) de R$ 10.00');
console.log(nota5 + ' nota(s) de R$ 5.00');
console.log(nota2 + ' nota(s) de R$ 2.00');
console.log('MOEDAS:');
console.log(moeda1 + ' moeda(s) de R$ 1.00');
console.log(moeda50 + ' moeda(s) de R$ 0.50');
console.log(moeda25 + ' moeda(s) de R$ 0.25');
console.log(moeda10 + ' moeda(s) de R$ 0.10');
console.log(moeda05 + ' moeda(s) de R$ 0.05');
console.log(moeda01 + ' moeda(s) de R$ 0.01');

