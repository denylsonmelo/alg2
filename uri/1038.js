var entrada = require('readline-sync');

var valores = entrada.question().split(' ');

var codigo = parseInt(valores.shift());
var quantidade = parseInt(valores.shift());

var valor;

switch (codigo) {
    case 1:
        valor = 4.00;
        break;
    case 2:
        valor = 4.50;
        break;
    case 3:
        valor = 5.00;
        break;
    case 4:
        valor = 2.00;
        break;
    case 5:
        valor = 1.50;
        break;
    default:
        valor = 0;
        break;
}
var total = quantidade * valor;


// var valor = 0;

// if (codigo == 1) {
//     valor = 4.00;
// } else if(codigo == 2){
//     valor = 4.50;
// } else if(codigo == 3){
//     valor = 5.00;
// } else if(codigo == 4){
//     valor = 2.00;
// } else if(codigo == 5){
//     valor = 1.50;
// }
// var total = quantidade * valor;


/*if (codigo == 1) {
    total = quantidade * 4.00;
} else if(codigo == 2){
    total = quantidade * 4.50;
} else if(codigo == 3){
    total = quantidade * 5.00;
} else if(codigo == 4){
    total = quantidade * 2.00;
} else if(codigo == 5){
    total = quantidade * 1.50;
}*/


console.log('Total: R$ ' + total.toFixed(2));