
//leitura para o laboratorio
var entrada = require('readline-sync');
var valorLido = entrada.question();
///////

////leitura para o uri
//var entrada = require('fs').readFileSync("/dev/stdin", "utf8");
//var valorLido = entrada.split('\n');
//valorLido = valorLido.shift();
//////////

var raio = parseFloat(valorLido); 
const pi = 3.14159;

//             (4/3) * pi * R3
var volume = (4/3) * pi * Math.pow(raio , 3);

console.log('VOLUME =', volume.toFixed(3));
//console.log('VOLUME = ' + volume.toFixed(3));
