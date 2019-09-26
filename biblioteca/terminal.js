exports.escolherTerminal = function () {
  return require('readline-sync');
}
// export function escolherTerminal() {
//   return require('readline-sync');
// }

exports.lerALinhaInteira = function (terminal) {
  return terminal.question();
}

exports.helloWorld = function (nome) {
  console.log('hello world ' + nome);
}

exports.imprimir = function (mensagem) {
  console.log(mensagem);
}