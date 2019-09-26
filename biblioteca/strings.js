exports.converterStringParaInteiro = function (valor) {
    return parseInt(valor);
}

exports.converterStringParaFloat = function(valor) {
    return parseFloat(valor);
}

exports.quebrarString = function(string, cadeia) {
    return string.split(cadeia);
}