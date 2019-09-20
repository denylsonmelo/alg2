//funcoes
//function ; nome; pode ter ou nao argumentos; bloco de codigo
//import { escolherTerminal } from "./../biblioteca/terminal";
var terminal = require('./../biblioteca/terminal');

console.log(terminal);

var entrada = terminal.escolherTerminal();

var numero1 = converterStringParaInteiro(lerALinhaInteira(entrada));
var numero2 = converterStringParaInteiro(lerALinhaInteira(entrada));

var soma = soma(numero1, numero2);
var valorParaImpressao = 'X = ' + soma;

imprimir(valorParaImpressao);