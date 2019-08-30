var entrada = require('readline-sync');

var quantidadeLeituras = parseInt(entrada.question());

var i = 0;
var dentro = fora = 0;

while (i < quantidadeLeituras) {
    var valorLido = parseInt(entrada.question());

    if ((10 <= valorLido) && (valorLido <= 20))
        dentro++;
    else
        fora++;
    i++;
}

console.log(dentro + " in");
console.log(fora + " out");