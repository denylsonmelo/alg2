var entrada = require('readline-sync');

var quantidadeLeituras = parseInt(entrada.question());

var quantidade, tipo, valorLido, qtdCobaias =0 , qtdCoelhos = 0, qtdRatos = 0, qtdSapos = 0, percentCoelhos = 0, percentRatos = 0, percentSapos = 0;

for(var i =0; i <quantidadeLeituras; i++){

    valorLido = entrada.question().split(' ');

    quantidade = parseInt(valorLido[0]);
    tipo = valorLido[1];
    
    qtdCobaias += quantidade;
    if(tipo === 'C'){
        qtdCoelhos += quantidade;
    }
    if(tipo === 'R'){
        qtdRatos += quantidade;
    }
    if(tipo === 'S'){
        qtdSapos += quantidade;
    }
    


}

percentCoelhos = qtdCoelhos / qtdCobaias;
percentRatos = qtdRatos / qtdCobaias;
percentSapos = qtdSapos / qtdCobaias;


console.log('Total: ' + qtdCobaias + ' cobaias');
console.log('Total de coelhos: ' + qtdCoelhos);
console.log('Total de ratos: ' + qtdRatos);
console.log('Total de sapos: ' + qtdSapos);
console.log('Percentual de coelhos: ' + percentCoelhos + ' %');
console.log('Percentual de ratos: ' + percentRatos + ' %');
console.log('Percentual de sapos: ' + percentSapos + ' %');
