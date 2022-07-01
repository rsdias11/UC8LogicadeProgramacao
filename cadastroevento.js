// Criar um algoritmo de cadastros de eventos, seguindo os seguintes critérios:
// -Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
// -Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
// -Listar participantes e palestrantes por evento.
// -Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
// -Criar fluxograma com todos os requisitos que devem ser atendidos pelo sistema.



const entDatadoEvento = require('readline-sync');
const entIdade = require('readline-sync');
const entNome = require('readline-sync');
const numParticipantes = require('readline-sync');

let nomeCompleto = entNome.question("Ola! Digite seu nome: ");

console.log("Olá! " + nomeCompleto + ", Seja Bem Vindo!")

let DataEvento = entDatadoEvento.question("Qual e a data do evento? ");

var date = new Date(DataEvento.split('/').reverse().join('/'));
var dataAtual = new Date();

if (date > dataAtual) {
    console.log("Data valida");
    let idade = entIdade.question("Qual e sua idade? ");

         if (idade >= 18) {
        console.log("Maior de idade")
        let participantes = numParticipantes.question("Digite o numero de participantes: ");
            if (participantes < 100) {
                console.log("Cadastro efetuado com sucesso!")    
            } else {
                console.log("Evento esgotado! Fique atento as proximas datas!")
            }        
        } else {
            console.log("Menor de idade \nCadastro nao permitido")    
        }
} else {
    console.log("Data invalida, tente novamente")
}

console.log("Fim do programa")