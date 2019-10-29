function carregarDados(arquivo){
    const linhas = arquivo.split('\n');
    const primeiraLinha = linhas[0].split(';');

    const qtdAlunos = strings.converterStringParaInteiro(primeiraLinha[0]);
    const qtdMaterias = strings.converterStringParaInteiro(primeiraLinha[1]);

    let aluno;
    const alunos = [];

    for(let i =1; i<= qtdAlunos; i++){
        aluno = linhas[i].split(';');
        alunos.push(aluno);
    }

    console.log(alunos)
}

const terminal = require('./../biblioteca/terminal');
const strings = require('./../biblioteca/strings');
const colegio = require('./../biblioteca/colegio');

const fs = require('fs');
const localArquivo ='arquivo/bd.csv';

//const entrada = terminal.escolherTerminal();
//terminal.lerALinhaInteira(entrada)
const bd = fs.readFileSync(localArquivo, 'utf-8');


carregarDados(bd);
