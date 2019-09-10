//funcoes
//function ; nome; pode ter ou nao argumentos; bloco de codigo
function helloWorld(nome){
    console.log('hello world ' + nome);
}
function imprimir(mensagem){
    console.log(mensagem);
}
//imprimir('comecando o assunto cambada');

var entrada = require('readline-sync');

var numero1 = parseInt(entrada.question());
var numero2 = parseInt(entrada.question());

var soma = numero1 + numero2;
var valorParaImpressao = 'X = ' + soma;

imprimir(valorParaImpressao);