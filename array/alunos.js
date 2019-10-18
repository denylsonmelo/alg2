var terminal = require('./../biblioteca/terminal');
var strings = require('./../biblioteca/strings');
var colegio = require('./../biblioteca/colegio');

const qtdAlunos = 2;

var nome = new Array(qtdAlunos),
    bimestre1 = new Array(qtdAlunos),
    bimestre2 = new Array(qtdAlunos);

var alunos = [
    nome, // ['aluno1', 'aluno2']
    bimestre1, // [ 2 , 3 ]
    bimestre2  // [ 4 , 6 ]
];

var entrada = terminal.escolherTerminal();

terminal.imprimir('por favor informe o nome dos alunos da turma: ');
for (var linha = 0; linha < nome.length; linha++) {
    terminal.imprimir(`Nome do aluno ${linha+1}: `);
    nome[linha] = terminal.lerALinhaInteira(entrada);
}

terminal.imprimir('por favor informe a nota do bimestre 1 dos alunos da turma: ');
for (var linha = 0; linha < nome.length; linha++) {
    terminal.imprimir(`Nota do "${nome[linha]}": `);
    bimestre1[linha] = strings.converterStringParaFloat(terminal.lerALinhaInteira(entrada));

}

terminal.imprimir('por favor informe a nota do bimestre 2 dos alunos da turma: ');
for (var linha = 0; linha < nome.length; linha++) {
    terminal.imprimir(`Nota do "${nome[linha]}": `);
    bimestre2[linha] = strings.converterStringParaFloat(terminal.lerALinhaInteira(entrada));

}

colegio.imprimirBoletim(alunos);