// Se a peça possuir um peso superior a 100gramas, pode cadastrar.
// Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente.
// Caso a peça tenha um nome com quantidade inferior a 3 carcteres, informe uma mensagem de erro.


let listaPecas = 5;

if(listaPecas >= 10) {
    console.log("A lista está cheia, não tem capacidade para cadastrar")
    ;
} else {

let entrada2 = require('readline-sync');
let peso = entrada2.question("Digite o peso da peca :");

if( parseInt(peso) >= 100 ) {
    console.log("Peça tem peso suficiente para cadastrar");

    let entrada = require('readline-sync');
    let nomePeca = entrada.question("Digite o nome da peca: ");

    if(nomePeca.length <3) {
    console.log("Nome muito curto!! Minimo de 3 caracteres")
    }

    if(nomePeca.length >3) {
    console.log("Peça cadastrada")
    }

} else {
    console.log("Peça tem peso inferior ao aceitável");
}
}

console.log("Fim do programa!")
