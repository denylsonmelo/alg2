var entrada = require('readline-sync');
//                              Dia 5 -->  ['', '5']
var diaInicio = entrada.question().split('Dia ')[1];
var horarioInicio = entrada.question().split(' : '); 
var horaInicio = horaInicio.shift();
var minutoInicio = horaInicio.shift();
var segundoInicio = horaInicio.shift();

var diaFinal = entrada.question().split('Dia ')[1];
var horarioFinal = entrada.question().split(' : '); 
var horaFinal = horarioFinal.shift();
var minutoFinal = horarioFinal.shift();
var segundoFinal = horarioFinal.shift();

var segundos = segundoFinal - segundoInicio;
//   10     30    --> 20  
//   50     30  -->   40

var dias = diaFinal - diaInicio;
var horas = horaFinal - horaInicio;
var minutos = minutoFinal - minutoInicio;


console.log(dias + ' dia(s)');
console.log(horas + ' hora(s)');
console.log(minutos + ' minuto(s)');
console.log(segundos + ' segundo(s)');