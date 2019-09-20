//   quebrarString("faltou luz de tarde", ' ')
//   ['faltou', 'luz', 'de', 'tarde'] 

//   quebrarString(' ', "faltou luz de tarde")
var entrada = escolherTerminal();

var valoresLidosLinha1 = quebrarString(lerALinhaInteira(entrada), ' ');
var valoresLidosLinha2 = quebrarString(lerALinhaInteira(entrada), ' ');

var x1 = converterStringParaFloat(pegarPrimeiroValorArray(valoresLidosLinha1));
var y1 = converterStringParaFloat(pegarPrimeiroValorArray(valoresLidosLinha1));

var x2 = converterStringParaFloat(pegarPrimeiroValorArray(valoresLidosLinha2));
var y2 = converterStringParaFloat(pegarPrimeiroValorArray(valoresLidosLinha2));

var distancia = calcularDistanciaEntreDoisPontos(x1, y1, x2, y2);

imprimir(distancia.toFixed(4));