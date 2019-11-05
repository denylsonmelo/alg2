function carregarDados(string){
    const linhas = strings.quebrarString(string, '\n'); 
    const primeiraLinha = strings.quebrarString(linhas[0], ';');

    const qtdAlunos = strings.converterStringParaInteiro(primeiraLinha[0]);
    const qtdMaterias = strings.converterStringParaInteiro(primeiraLinha[1]);

    let aluno;
    const alunos = [];

    for(let i =1; i<= qtdAlunos; i++){
        aluno = strings.quebrarString(linhas[i], ';'); 
        alunos.push(aluno);
    }

    
    let materia;
    const materias = [];
    
    for(let i = (qtdAlunos+1); i <= (qtdMaterias + qtdAlunos); i++){
        materia = strings.quebrarString(linhas[i], ';');
        materias.push(materia);
    }

    return {alunos, materias}; // JSON
}

function prepararDadosSalvar(alunos, materias){
    alunos.lenght + ";" materias.lenght
}

const terminal = require('./../biblioteca/terminal');
const strings = require('./../biblioteca/strings');
const colegio = require('./../biblioteca/colegio');

const fs = require('fs');
const localArquivo ='arquivo/bd.csv';

//const entrada = terminal.escolherTerminal();
//terminal.lerALinhaInteira(entrada)
const bd = fs.readFileSync(localArquivo, 'utf-8');
const dados = carregarDados(bd);
const alunos = dados.alunos;
const materias = dados.materias;

const dadosPreparados = prepararDadosSalvar(alunos, materias);
fs.writeFileSync(localArquivo, dadosPreparados,'utf-8');

