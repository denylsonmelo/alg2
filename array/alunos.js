var terminal = require('./../biblioteca/terminal');
var strings = require('./../biblioteca/strings');
var colegio = require('./../biblioteca/colegio');

const qtdAlunos = 2;
var nome = new Array(qtdAlunos), 
    bimestre1 = new Array(qtdAlunos),
    bimestre2 = new Array(qtdAlunos);

var entrada = terminal.escolherTerminal();

terminal.imprimir('por favor informe o nome dos alunos da turma: ');
for(var i = 0; i < nome.length ; i++){
    terminal.imprimir(`Nome do aluno ${i+1}: `);
    nome[i] = terminal.lerALinhaInteira(entrada);
}

terminal.imprimir('por favor informe a nota do bimestre 1 dos alunos da turma: ');
for(var i = 0; i < nome.length ; i++){
    terminal.imprimir(`Nota do "${nome[i]}": `);
    bimestre1[i] = strings.converterStringParaFloat(terminal.lerALinhaInteira(entrada));

}

terminal.imprimir('por favor informe a nota do bimestre 2 dos alunos da turma: ');
for(var i = 0; i < nome.length ; i++){
    terminal.imprimir(`Nota do "${nome[i]}": `);
    bimestre2[i] = strings.converterStringParaFloat(terminal.lerALinhaInteira(entrada));

}

colegio.imprimirBoletim(nome, bimestre1, bimestre2);