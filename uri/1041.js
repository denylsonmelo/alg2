var entrada = require('readline-sync');
var linhaLida = entrada.question().split(' ');

var x = parseFloat(linhaLida[0]);
var y = parseFloat(linhaLida[1]);

if (x === 0 && y === 0 ) {
    console.log('Origem');
} else {
    //   ==    !=
    //  ===    !==  
    if(x === 0 && y !== 0){
        console.log('Eixo Y');
    }
    if(y === 0 && x !== 0){
        console.log('Eixo X');
    }
    if(x > 0 && y > 0 ){
        console.log('Q1');
    }
    if(x < 0 && y > 0 ){
        console.log('Q2');
    }
    if(x < 0 && y < 0 ){
        console.log('Q3');
    }
    if(x > 0 && y < 0 ){
        console.log('Q4');
    }
}

// if (x === 0 && y === 0) {
//     console.log('Origem');
// } else if (x === 0) {
//     console.log('Eixo Y');
// } else if (y === 0) {
//     console.log('Eixo X');
//}