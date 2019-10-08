exports.imprimirBoletim = function(alunos, notas){
    console.log('imprimindo .....');

    console.log(` - Alunos -------- Notas`);
    for(var i=0; i < alunos.length; i++){
        console.log(` - ${alunos[i]} -------- ${notas[i]}`);
    }
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