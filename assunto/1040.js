var entrada = escolherTerminal();

var valoresLidos = quebrarString(lerAlinhaInteira(entrada), ' ');

var nota1 = converterStringFloat(pegarPrimeiroValorArray(valoresLidos));
var nota2 = converterStringFloat(pegarPrimeiroValorArray(valoresLidos));
var nota3 = converterStringFloat(pegarPrimeiroValorArray(valoresLidos));
var nota4 = converterStringFloat(pegarPrimeiroValorArray(valoresLidos));

var peso1 = 2,
    peso2 = 3,
    peso3 = 4,
    peso4 = 1;

var media = calcularMediaPonderada(nota1, nota2 , nota3, nota4, peso1, peso2, peso3, peso4);
media = arredondar1Casa(media);

imprimir('Media: ' + media);

var situacao = verificarSituacaoAlunoRegular(media);
imprimir(situacao);

if(situacao === 'Aluno em exame.'){
    var nota = converterStringFloat(lerAlinhaInteira(entrada));
    imprimir('Nota do exame: ' + nota);
       
    media = arredondar1Casa(calcularMediaAritmetica(nota, media));

    imprimir(verificarSituacaoAlunoFinal(media));
    imprimir('Media final: ' + media);
}