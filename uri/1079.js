var entrada = require('readline-sync');
var quantidadeLeituras = parseInt(entrada.question());

var valoresLidos, media, primeiro, segundo, terceiro;
var peso1 = 2, peso2 = 3, peso3 = 5;

for(var i = 0; i < quantidadeLeituras; i++){
    
    valoresLidos = entrada.question().split(' ');
    
    primeiro = parseFloat(valoresLidos.shift());
    segundo = parseFloat(valoresLidos.shift());
    terceiro = parseFloat(valoresLidos.shift());
    
    media = ((primeiro * peso1) + (segundo * peso2) + (terceiro * peso3)) / (peso1 + peso2 + peso3);
    console.log(media.toFixed(1));
}


