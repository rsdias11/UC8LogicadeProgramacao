//Considere  a quantidade de alunos presentes na sala, percorra do zero até o número total de alunos e retnornar os seguintes resultados:

// se o número for par, escreva 'par' e o número correspondente
// se o número for impar, escreva 'impar' e o número correspondente
// se o número for zero, escreva 'zero' e o número correspondente

const entrada = require('readline-sync');

let totalAlunos = entrada.question("Digite o número total de alunos ");

for (let aluno = 0; aluno <= parseInt(totalAlunos); aluno++) {
    if (aluno == 0) {
        console.log("Zero " + aluno);
    }  
    if 
    (aluno > 0 && aluno % 2 == 0) {
        console.log("Par " + aluno);        
    }   
    if (aluno % 2 != 0) {
    console.log("Impar " + aluno);
    }
}