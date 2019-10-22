exports.imprimirBoletim = function (alunos) {
    console.log('imprimindo .....');

    console.log('\t_________________________________________')
    console.log(`\t|  Alunos\t-----\tBim 1\t-----\tBim 2\t-----\tMedia  |`);
    console.log('\t_________________________________________')
    var media = 0;

    // aluno1, aluno2
    // 2 , 3
    // 4 , 6
    
    // aluno1 , 2, 4

    for (var i = 0; i < alunos.length; i++) {
        aluno = alunos[i];
        for (var j = 0; j < aluno.length; j++) {
            media = (aluno[j] + alunos[i][j]) / 2;
            console.log(`\t|  ${alunos[i][j]}\t-----\t${alunos[i+1][j]}\t-----\t${alunos[i+2][j]}\t-----\t${media}  |`);
        }
    }
    console.log('\t_________________________________________')
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