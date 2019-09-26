var terminal = require('./../biblioteca/terminal');
var matematica = require('./../biblioteca/matematica');
var strings = require('./../biblioteca/strings');
var arrays = require('./../biblioteca/arrays');
var colegio = require('./../biblioteca/colegio');

var entrada = terminal.escolherTerminal();

var valoresLidos = strings.quebrarString(terminal.lerAlinhaInteira(entrada), ' ');

var nota1 = strings.converterStringFloat(arrays.pegarPrimeiroValorArray(valoresLidos));
var nota2 = strings.converterStringFloat(arrays.pegarPrimeiroValorArray(valoresLidos));
var nota3 = strings.converterStringFloat(arrays.pegarPrimeiroValorArray(valoresLidos));
var nota4 = strings.converterStringFloat(arrays.pegarPrimeiroValorArray(valoresLidos));

var peso1 = 2,
    peso2 = 3,
    peso3 = 4,
    peso4 = 1;

var media = matematica.calcularMediaPonderada(nota1, nota2 , nota3, nota4, peso1, peso2, peso3, peso4);
media = matematica.arredondar1Casa(media);

terminal.imprimir('Media: ' + media);

var situacao = colegio.verificarSituacaoAlunoRegular(media);
terminal.imprimir(situacao);

if(situacao === 'Aluno em exame.'){
    var nota = strings.converterStringFloat(terminal.lerAlinhaInteira(entrada));
    terminal.imprimir('Nota do exame: ' + nota);
       
    media = matematica.arredondar1Casa(matematica.calcularMediaAritmetica(nota, media));

    terminal.imprimir(colegio.verificarSituacaoAlunoFinal(media));
    terminal.imprimir('Media final: ' + media);
}