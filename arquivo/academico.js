function carregarDados(string) {
    string = Buffer.from(string, 'base64').toString()
    const linhas = strings.quebrarString(string, '\n');
    const primeiraLinha = strings.quebrarString(linhas[0], ';');

    const qtdAlunos = strings.converterStringParaInteiro(primeiraLinha[0]);
    const qtdMaterias = strings.converterStringParaInteiro(primeiraLinha[1]);

    let aluno;
    const alunos = [];

    for (let i = 1; i <= qtdAlunos; i++) {
        aluno = strings.quebrarString(linhas[i], ';');
        alunos.push(aluno);
    }


    let materia;
    const materias = [];

    for (let i = (qtdAlunos + 1); i <= (qtdMaterias + qtdAlunos); i++) {
        materia = strings.quebrarString(linhas[i], ';');
        materias.push(materia);
    }

    return {
        alunos,
        materias
    }; // JSON
}

function prepararDadosSalvar(alunos, materias) {
    let dados = `${alunos.length};${materias.length}\n`;

    for (let i = 0; i < alunos.length; i++) {
        dados = dados.concat(`${alunos[i]}\n`);
    }

    for (let i = 0; i < materias.length; i++) {
        dados = dados.concat(`${materias[i]}\n`);
    }
    dados = dados.split(',').join(';');
    dados = Buffer.from(dados).toString('base64')
    return dados;
}

function menuInicial() {
    console.log('\t╔════════════════╗\n\t║  menu inicial  ║\t\n\t╚════════════════╝\n\t  1 - Alunos\n\t  2 - Materias\n\t  3 - Lancar Notas\n\t  4 - Gerar Resultado Final\n\t  9 - Sair\n \t───────────────────────────────')
}

function menuAlunos(alunos) {
    let escolhaUsuario = '';

    for (; escolhaUsuario !== '9';) {
        limparTela();
        console.log('\t--------------\n\t  menu alunos\t\n\t--------------\n\t  1 - Listar\n\t  2 - Cadastrar\n\t  9 - Voltar\n \t--------------');
        escolhaUsuario = terminal.lerALinhaInteira(entrada);

        switch (escolhaUsuario) {
            case '1':

                let alunoListar;
                console.log('matricula\tnome\t');
                for (let i = 0; i < alunos.length; i++) {
                    alunoListar = alunos[i];
                    console.log(`${alunoListar[0]}\t${alunoListar[1]}`);
                }

                break;
            case '2':

                terminal.imprimir('por favor informe o nome do aluno: ');
                let nome = terminal.lerALinhaInteira(entrada);

                terminal.imprimir('por favor informe a nota do bimestre 1: ');
                let nota1 = strings.converterStringParaFloat(terminal.lerALinhaInteira(entrada));

                terminal.imprimir('por favor informe a nota do bimestre 2: ');
                let nota2 = strings.converterStringParaFloat(terminal.lerALinhaInteira(entrada));

                let id = alunos.length;
                let alunoCadastrar = [id, nome, nota1, nota2];

                alunos.push(alunoCadastrar);

                break;
            case '9':
                break;
            default:
                console.log('opcao invalida');
                break;
        }
    }
    return alunos;
}

function limparTela() {
    console.log('\n\n\n\n\n\n\n\n\n\n');
}

function exibir(mensagem) {
    console.log(mensagem);
}

const terminal = require('./../biblioteca/terminal');
const strings = require('./../biblioteca/strings');
const colegio = require('./../biblioteca/colegio');

const fs = require('fs');
const localArquivo = 'arquivo/bd';

//const entrada = terminal.escolherTerminal();
//terminal.lerALinhaInteira(entrada)
const bd = fs.readFileSync(localArquivo, 'utf-8');
const dados = carregarDados(bd);
let alunos = dados.alunos;
const materias = dados.materias;

// processamento

const entrada = terminal.escolherTerminal();

let escolhaUsuario = '';
let mensagem = '';
for (; escolhaUsuario !== '9';) {
    limparTela();
    exibir(mensagem);
    menuInicial();
    escolhaUsuario = terminal.lerALinhaInteira(entrada);

    switch (escolhaUsuario) {
        case '1':
            alunos = menuAlunos(alunos);
            mensagem = '';
            break;
        case '2':
            mensagem = 'opcao ainda nao disponivel';
            break;
        case '3':
            mensagem = 'opcao ainda nao disponivel';
            break;
        case '4':
            mensagem = colegio.imprimirBoletim(alunos);
            break;
        case '9':
            break;
        default:
            mensagem = 'opcao invalida';
            break;
    }
}


const dadosPreparados = prepararDadosSalvar(alunos, materias);
fs.writeFileSync('arquivo/bd', dadosPreparados, 'utf-8');