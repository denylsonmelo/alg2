exports.tabuada = function(numero){
    var tabuadaString = '';

    for(var i = 1; i<=10; i++){
        tabuadaString = tabuadaString + i + ' x ' + numero + ' = ' + (i * numero) + '\n';
    }

    return tabuadaString;
}

exports.soma = function (param1, param2) {
    var soma = param1 + param2;
    return soma;
}

exports.calcularDistanciaEntreDoisPontos = function (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}

exports.arredondar1Casa = function (valor) {
    return valor.toFixed(1);
}

exports.calcularMediaAritmetica = function (valor1, valor2) {
    return (valor1 + valor2) / 2;
}

exports.calcularMediaPonderada = function (nota1, nota2, nota3, nota4, peso1, peso2, peso3, peso4) {
    var somaPesos = peso1 + peso2 + peso3 + peso4;
    return (nota1 * peso1 + nota2 * peso2 + nota3 * peso3 + nota4 * peso4) / (somaPesos);
}