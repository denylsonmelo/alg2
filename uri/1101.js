var entrada = require('readline-sync');

var valoresLidos, primeiroValor, segundoValor, maior, menor, soma, impressao;

for (;;) {

    valoresLidos = entrada.question().split(' ');
    primeiroValor = parseInt(valoresLidos.shift());
    segundoValor = parseInt(valoresLidos.shift());

    if ((primeiroValor <= 0) || (segundoValor <= 0)) {
        break;
    }

    if (primeiroValor >= segundoValor) {
        maior = primeiroValor;
        menor = segundoValor;
    }else{
        maior = segundoValor;
        menor = primeiroValor;
    }

    soma = 0;
    impressao = '';
    for( ; menor <= maior ; menor++){
        impressao = impressao.concat(menor + " ");
        soma += menor;
    }
    impressao = impressao.concat('Sum=' + soma);
    console.log(impressao);
}