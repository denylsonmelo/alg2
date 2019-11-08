function carregarDados(string){
    //string = Buffer.from(string, 'base64').toString()
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
    let dados = `${alunos.length};${materias.length}\n`;

    for(let i = 0; i< alunos.length; i++){
        dados = dados.concat(`${alunos[i]}\n`);
    }

    for(let i = 0; i < materias.length; i++){
        dados = dados.concat(`${materias[i]}\n`);
    }
    dados = dados.split(',').join(';');
    //dados = Buffer.from(dados).toString('base64')
    return dados;
}

const terminal = require('./../biblioteca/terminal');
const strings = require('./../biblioteca/strings');
const colegio = require('./../biblioteca/colegio');

const fs = require('fs');
const localArquivo ='arquivo/bd';

//const entrada = terminal.escolherTerminal();
//terminal.lerALinhaInteira(entrada)
const bd = fs.readFileSync(localArquivo, 'utf-8');
const dados = carregarDados(bd);
const alunos = dados.alunos;
const materias = dados.materias;

//alunos.push([7, 'novo nome', 4.5, 6]);
// processamento


const dadosPreparados = prepararDadosSalvar(alunos, materias);
fs.writeFileSync(localArquivo, dadosPreparados,'utf-8');

