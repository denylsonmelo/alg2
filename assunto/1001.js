//funcoes
//function ; nome; pode ter ou nao argumentos; bloco de codigo
function helloWorld(nome){
    console.log('hello world ' + nome);
}

function imprimir(mensagem){
    console.log(mensagem);
}

function soma(param1, param2){
    //console.log(param1 + param2);
    //imprimir(param1 + param2);
    var soma = param1 + param2;
    return soma;
}

function converterStringParaInteiro(valor){
    //console.log(valor + " - " + typeof(valor));
    return parseInt(valor);
    //console.log(valor + " - " + typeof(valor));
}

function lerALinhaInteira(terminal){
    return terminal.question();
}

function escolherTerminal(){
    return require('readline-sync');
}

var entrada = escolherTerminal();

var numero1 = converterStringParaInteiro(lerALinhaInteira(entrada));
var numero2 = converterStringParaInteiro(lerALinhaInteira(entrada));

var soma = soma(numero1, numero2);
var valorParaImpressao = 'X = ' + soma;

imprimir(valorParaImpressao);