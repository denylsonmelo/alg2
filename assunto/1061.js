// declaracao de bibliotecas
var terminal = require("./../biblioteca/terminal");
var strings = require("./../biblioteca/strings");
var arrays = require("./../biblioteca/arrays");

// declaracao de variaveis
var duracaoDias, duracaoHoras, duracaoMinutos, duracaoSegundos, diaInicio, diaFinal, horaInicio, horaFinal, minutoInicio, minutoFinal, segundoInicio, segundoFinal, valorLido;

// modo de leitura
var entrada = terminal.escolherTerminal();

// leitura de dia, hora, minuto, segundo inicial
diaInicio = strings.converterStringParaInteiro(strings.quebrarString(terminal.lerALinhaInteira(entrada), 'Dia '));
valorLido = strings.quebrarString(terminal.lerALinhaInteira(entrada), ' : ')
horaInicio = strings.converterStringParaInteiro(arrays.pegarPrimeiroValorArray(valorLido));
minutoInicio = strings.converterStringParaInteiro(arrays.pegarPrimeiroValorArray(valorLido));
segundoInicio = strings.converterStringParaInteiro(arrays.pegarPrimeiroValorArray(valorLido));

// leitura de dia, hora, minuto, segundo final
diaFinal = strings.converterStringParaInteiro(strings.quebrarString(terminal.lerALinhaInteira(entrada), 'Dia '));
valorLido = strings.quebrarString(terminal.lerALinhaInteira(entrada), ' : ')
horaInicio = strings.converterStringParaInteiro(arrays.pegarPrimeiroValorArray(valorLido));
minutoInicio = strings.converterStringParaInteiro(arrays.pegarPrimeiroValorArray(valorLido));
segundoInicio = strings.converterStringParaInteiro(arrays.pegarPrimeiroValorArray(valorLido));

// processamento
duracaoDias = diaFinal - diaInicio;

// Dia 26
// 20 : 00 : 00
// Dia 28
// 09 : 00 : 00
// duracaoDias = 28 - 26 = 2
if(horaFinal < horaInicio){ 
    duracaoDias--;
    duracaoHoras = 24 - horaInicio + horaFinal;
}else{
    duracaoHoras = horaFinal - horaInicio;
}


duracaoMinutos = minutoFinal - minutoInicio;
duracaoSegundos = segundoFinal - segundoInicio;

// imprimindo resultados
terminal.imprimir(duracaoDias + ' dia(s)');
terminal.imprimir(duracaoHoras + ' hora(s)');
terminal.imprimir(duracaoMinutos + ' minuto(s)');
terminal.imprimir(duracaoSegundos + ' segundo(s)');