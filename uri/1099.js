var entrada = require('readline-sync');
var leituras = parseInt(entrada.question());

var valoresLidos, primeiroValor, segundoValor, maior, menor, soma;

for (var i = 0; i < leituras; i++) {

    valoresLidos = entrada.question().split(' ');
    primeiroValor = parseInt(valoresLidos.shift());
    segundoValor = parseInt(valoresLidos.shift());

    if (primeiroValor >= segundoValor) {
        maior = primeiroValor;
        menor = segundoValor;
    } else {
        maior = segundoValor;
        menor = primeiroValor;
    }

    // if ternario
    //  (condicao) ? verdade : falso ;
    //maior = (primeiroValor >= segundoValor) ? primeiroValor : segundoValor ;
    //menor = (primeiroValor >= segundoValor) ? segundoValor : primeiroValor ;

    soma = 0;
    //menor++;
    for( menor++ ; menor < maior ; menor++ ){
        if(menor % 2 != 0)
            soma += menor;
    }
    
    console.log(soma);
}


