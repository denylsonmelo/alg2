var entrada = require('readline-sync');

var valorLido = parseInt(entrada.question());

var anos = Math.trunc(valorLido / 365);
var meses = Math.trunc(valorLido % 365 / 30);
var dias = valorLido % 365 % 30 ;


console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");