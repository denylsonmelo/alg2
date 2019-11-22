function completarEsquerda(string) {
    let valorFaltando = 0;
    let stringRetorno = '';
    if (string.length < 10) {
        valorFaltando = 10 - string.length;

        for (let i = 0; i < valorFaltando; i++) {
            stringRetorno = stringRetorno.concat(' ');
        }
        stringRetorno = stringRetorno.concat(string);
    }

    return stringRetorno;
}

exports.imprimirBoletim = function (alunos) {
    let boletim = '';

    boletim = boletim.concat('imprimindo .....\n');

    boletim = boletim.concat('  _________________________________________\n')
    boletim = boletim.concat(`  |  Matricula\tAlunos\t\tBim 1\tBim 2\tMedia\tSituacao  |\n`);
    boletim = boletim.concat('  _________________________________________\n')
    let media = 0;

    for (let i = 0; i < alunos.length; i++) {
        let aluno = alunos[i]; // ['aluno1' , 2 , 4]

        let matricula = aluno[0];
        let nome = aluno[1];
        let nota1 = aluno[2];
        let nota2 = aluno[3];

        media = (nota1 + nota2) / 2;
        let situacao = this.verificarSituacaoAlunoRegular(media);
        boletim = boletim.concat(`  |  ${completarEsquerda(matricula)}\t${nome}\t\t${nota1}\t${nota2}\t${media}\t${situacao}  |\n`);
    }
    boletim = boletim.concat('  _________________________________________\n')
    return boletim;
}

exports.verificarSituacaoAlunoRegular = function (media) {
    if (media >= 7) {
        return 'Aluno aprovado.';
    } else if (media < 5) {
        return 'Aluno reprovado.';
    } else if (media >= 5 && media <= 6.9) {
        return 'Aluno em exame.';
    }
}

exports.verificarSituacaoAlunoFinal = function (media) {
    if (media >= 5) {
        return 'Aluno aprovado.';
    } else if (media <= 4.9) {
        return 'Aluno reprovado.';
    }
}