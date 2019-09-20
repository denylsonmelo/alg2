function escolherTerminal(){
    return require('readline-sync');
}

function lerALinhaInteira(terminal){
    return terminal.question();
}

function helloWorld(nome){
    console.log('hello world ' + nome);
}

function imprimir(mensagem){
    console.log(mensagem);
}