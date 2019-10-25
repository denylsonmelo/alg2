const fs = require('fs');

//const arquivo = fs.readFileSync('arquivo/teste.txt', 'utf8');

let variavel = '\t\tqvamos \n\nmudar \to conteudo\n\tgravar'; 
const arquivo = fs.writeFileSync('arquivo/teste.txt', variavel , 'utf8');

console.log(arquivo);