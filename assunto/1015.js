var entrada = require('readline-sync');

var valoresLidosLinha1 = entrada.question().split(' ');
var valoresLidosLinha2 = entrada.question().split(' ');

var x1 = parseFloat(valoresLidosLinha1.shift());
var y1 = parseFloat(valoresLidosLinha1.shift());

var x2 = parseFloat(valoresLidosLinha2.shift());
var y2 = parseFloat(valoresLidosLinha2.shift());

var distancia = Math.sqrt(Math.pow((x2 - x1) , 2) + Math.pow((y2 - y1) , 2));

console.log(distancia.toFixed(4));