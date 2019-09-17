// escolherTerminal
// lerAlinhaInteira
// quebrarString
// pegarPrimeiroValorArray
// converterStringFloat
// mediaPonderada
// situacaoAlunoRegular
// situacaoAlunoFinal
// imprimir

var entrada = require('readline-sync');

var valoresLidos = entrada.question().split(' ');

var nota1 = parseFloat(valoresLidos.shift());
var nota2 = parseFloat(valoresLidos.shift());
var nota3 = parseFloat(valoresLidos.shift());
var nota4 = parseFloat(valoresLidos.shift());

var peso1 = 2,
    peso2 = 3,
    peso3 = 4,
    peso4 = 1;
var somaPesos = peso1 + peso2 + peso3 + peso4;

var media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3 + nota4 * peso4) / somaPesos;
media = media.toFixed(1);

console.log('Media: ' + media);

if (media >= 7) {
    console.log('Aluno aprovado.');
} else if (media < 5) {
    console.log('Aluno reprovado.');
} else if (media >= 5 && media <= 6.9) {
    console.log('Aluno em exame.');

    var notaExame = parseFloat(entrada.question());

    console.log('Nota do exame: ' + notaExame);

    media = (media + notaExame) / 2;
    media = media.toFixed(1);

    if (media >= 5) {
        console.log('Aluno aprovado.');
    } else if (media <= 4.9) {
        console.log('Aluno reprovado.');
    }
    
    console.log('Media final: ' + media);
    
}