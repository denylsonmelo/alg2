function verificarSituacaoAlunoRegular(media){
    if(media >= 7){
        return 'Aluno aprovado.';
    } else if(media < 5) {
        return 'Aluno reprovado.';
    } else if (media >= 5 && media <= 6.9){
        return 'Aluno em exame.';
    }
}

function verificarSituacaoAlunoFinal(media){
    if (media >= 5) {
        return 'Aluno aprovado.';
    } else if (media <= 4.9) {
        return 'Aluno reprovado.';
    }
}