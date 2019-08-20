var entrada = require('readline-sync');

var valorLido = parseInt(entrada.question());

                      // minutos  segundos  
var hora = Math.trunc(valorLido / 3600);  // 60 * 60 segundos;
var minuto = Math.trunc(valorLido % 3600 / 60);      // .toFixed(0);

// variavel que nao foi atribuida -> undefined, sem erro
var segundo = valorLido - ((hora * 3600) + (minuto * 60)); 

console.log(hora + ":" + minuto + ":" + segundo);