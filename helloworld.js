//System.out.print("hello world");
console.log("hello world") 
///confirm("alguma pergunta")

// uri -> node v8.4 ler informacao do usuario na linha de comando
// import java.util.Scanner;
// Scanner input = new Scanner(System.in);
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');

//Integer.parseInt();
//parseInt()
//Float.parseFloat();/
//parseFloat()
//Double.parseDouble();


// lab -> node v12.7 
var entrada = require('readline-sync');
var nome = entrada.question('qual teu nome? ');

console.log('o nome do fulano eh ' + nome)

