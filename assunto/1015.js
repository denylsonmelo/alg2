//   quebrarString("faltou luz de tarde", ' ')
//   ['faltou', 'luz', 'de', 'tarde'] 

//   quebrarString(' ', "faltou luz de tarde")
var terminal = require('./../biblioteca/terminal');
var strings = require('./../biblioteca/strings');
var matematica = require('./../biblioteca/matematica');
var arrays = require('./../biblioteca/arrays');

var entrada = terminal.escolherTerminal();

var valoresLidosLinha1 = strings.quebrarString(terminal.lerALinhaInteira(entrada), ' ');
var valoresLidosLinha2 = strings.quebrarString(terminal.lerALinhaInteira(entrada), ' ');

var x1 = strings.converterStringParaFloat(arrays.pegarPrimeiroValorArray(valoresLidosLinha1));
var y1 = strings.converterStringParaFloat(arrays.pegarPrimeiroValorArray(valoresLidosLinha1));

var x2 = strings.converterStringParaFloat(arrays.pegarPrimeiroValorArray(valoresLidosLinha2));
var y2 = strings.converterStringParaFloat(arrays.pegarPrimeiroValorArray(valoresLidosLinha2));

var distancia = matematica.calcularDistanciaEntreDoisPontos(x1, y1, x2, y2);

terminal.imprimir(distancia.toFixed(4));