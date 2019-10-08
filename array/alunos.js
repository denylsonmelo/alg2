var terminal = require('./../biblioteca/terminal');
var strings = require('./../biblioteca/strings');
var colegio = require('./../biblioteca/colegio');

const qtdAlunos = 10;
var nome = new Array(qtdAlunos), nota = new Array(qtdAlunos);

var entrada = terminal.escolherTerminal();

terminal.imprimir('por favor informe o nome dos alunos da turma: ');
for(var i = 0; i < nome.length ; i++){
    terminal.imprimir(`Nome do aluno ${i+1}: `);
    nome[i] = terminal.lerALinhaInteira(entrada);
}

terminal.imprimir('por favor informe a nota dos alunos da turma: ');
for(var i = 0; i < nome.length ; i++){
    terminal.imprimir(`Nota do "${nome[i]}": `);
    nota[i] = strings.converterStringParaFloat(terminal.lerALinhaInteira(entrada));

}

console.log(nome);
console.log(nota);

colegio.imprimirBoletim(nome, nota);