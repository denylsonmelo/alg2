exports.imprimirBoletim = function(alunos, bimestre1, bimestre2){
    console.log('imprimindo .....');

    console.log('\t_________________________________________')
    console.log(`\t|  Alunos\t-----\tBim 1\t-----\tBim 2\t-----\tMedia  |`);
    console.log('\t_________________________________________')
    var media = 0;
    for(var i=0; i < alunos.length; i++){
        media = (bimestre1[i] + bimestre2[i])/2;
        console.log(`\t|  ${alunos[i]}\t-----\t${bimestre1[i]}\t-----\t${bimestre2[i]}\t-----\t${media}  |`);
    }
    console.log('\t_________________________________________')
}

exports.verificarSituacaoAlunoRegular = function(media){
    if(media >= 7){
        return 'Aluno aprovado.';
    } else if(media < 5) {
        return 'Aluno reprovado.';
    } else if (media >= 5 && media <= 6.9){
        return 'Aluno em exame.';
    }
}

exports.verificarSituacaoAlunoFinal = function(media){
    if (media >= 5) {
        return 'Aluno aprovado.';
    } else if (media <= 4.9) {
        return 'Aluno reprovado.';
    }
}