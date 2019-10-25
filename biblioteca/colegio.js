exports.imprimirBoletim = function (alunos) {
    console.log('imprimindo .....');

    console.log('  _________________________________________')
    console.log(`  |  Alunos\t\tBim 1\tBim 2\tMedia\tSituacao  |`);
    console.log('  _________________________________________')
    let media = 0;

    for (let i = 0; i < alunos.length; i++) {
        let aluno = alunos[i];  // ['aluno1' , 2 , 4]
     
        let nome = aluno[0];
        let nota1 = aluno[1];
        let nota2 = aluno[2];

        media = (nota1 + nota2) / 2;
        let situacao = this.verificarSituacaoAlunoRegular(media);
        console.log(`  |  ${nome}\t\t${nota1}\t${nota2}\t${media}\t${situacao}  |`);
    }
    console.log('  _________________________________________')
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