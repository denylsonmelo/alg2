//funcoes
//function ; nome; pode ter ou nao argumentos; bloco de codigo
//import { escolherTerminal } from "./../biblioteca/terminal";
var terminal = require('./../biblioteca/terminal');
var strings = require('./../biblioteca/strings');
var matematica = require('./../biblioteca/matematica');

var entrada = terminal.escolherTerminal();

var numero1 = strings.converterStringParaInteiro(terminal.lerALinhaInteira(entrada));
var numero2 = strings.converterStringParaInteiro(terminal.lerALinhaInteira(entrada));

var soma = matematica.soma(numero1, numero2);
var valorParaImpressao = 'X = ' + soma;

terminal.imprimir(valorParaImpressao);