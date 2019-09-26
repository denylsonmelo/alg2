var terminal = require('./../biblioteca/terminal');
var strings = require('./../biblioteca/strings');
var matematica = require('./../biblioteca/matematica');

var entrada = terminal.escolherTerminal();

var valorLido = strings.converterStringParaInteiro(terminal.lerALinhaInteira(entrada));

terminal.imprimir(matematica.tabuada(valorLido));