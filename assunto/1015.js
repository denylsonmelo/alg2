function escolherTerminal(){
    return require('readline-sync');
}

function lerALinhaInteira(terminal){
    return terminal.question();
}

//   quebrarString("faltou luz de tarde", ' ')
//   ['faltou', 'luz', 'de', 'tarde'] 

//   quebrarString(' ', "faltou luz de tarde")


function quebrarString(string, cadeia){
    return string.split(cadeia);
}

function pegarPrimeiroValorArray(array){
    return array.shift();
}

function converterStringParaFloat(valor){
    return parseFloat(valor);
}
   
function calcularDistanciaEntreDoisPontos(x1, y1, x2, y2){
    return Math.sqrt(Math.pow((x2 - x1) , 2) + Math.pow((y2 - y1) , 2));
}

function imprimir(mensagem){
    console.log(mensagem);
}

var entrada = escolherTerminal();

var valoresLidosLinha1 = quebrarString(lerALinhaInteira(entrada), ' ');
var valoresLidosLinha2 = quebrarString(lerALinhaInteira(entrada), ' ');

var x1 = converterStringParaFloat(pegarPrimeiroValorArray(valoresLidosLinha1));
var y1 = converterStringParaFloat(pegarPrimeiroValorArray(valoresLidosLinha1));

var x2 = converterStringParaFloat(pegarPrimeiroValorArray(valoresLidosLinha2));
var y2 = converterStringParaFloat(pegarPrimeiroValorArray(valoresLidosLinha2));

var distancia = calcularDistanciaEntreDoisPontos(x1, y1, x2, y2);

imprimir(distancia.toFixed(4));