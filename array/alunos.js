const terminal = require('./../biblioteca/terminal');
const strings = require('./../biblioteca/strings');
const colegio = require('./../biblioteca/colegio');

const qtdAlunos = 2;

const alunos = [];

const entrada = terminal.escolherTerminal();

for(let i = 0; i < qtdAlunos; i ++){
    terminal.imprimir('por favor informe o nome do aluno: ');
    let nome = terminal.lerALinhaInteira(entrada);
    
    terminal.imprimir('por favor informe a nota do bimestre 1: ');
    let nota1 = strings.converterStringParaFloat(terminal.lerALinhaInteira(entrada));
    
    terminal.imprimir('por favor informe a nota do bimestre 2: ');
    let nota2 = strings.converterStringParaFloat(terminal.lerALinhaInteira(entrada));
    
    let aluno = [nome, nota1, nota2];

    alunos.push(aluno);
}

colegio.imprimirBoletim(alunos);