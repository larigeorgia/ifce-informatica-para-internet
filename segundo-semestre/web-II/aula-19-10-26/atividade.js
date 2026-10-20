import readlineSync from 'readline-sync';

// 3.1 (B)
const nome = "Maria";
let idade = 1;
let aprovado = true;

// 3.2 (B) 
const pi = 3.14;
// pi = 3.1416;
console.log(pi);

// 4.3 (M)
const num5 = 5;
const num5str = "5";

console.log(typeof(num5), typeof(num5str));

console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");
console.log(null == undefined);
console.log(null === undefined);

// 5.6 (D)
const peso = Number(readlineSync.question("Digite o seu peso: "));
const altura = Number(readlineSync.question("Digite a sua altura: "));

const imc = peso/(altura * altura)

if(imc<18.5){
    console.log("Abaixo do peso.")
}else if(imc >= 24.9 && imc < 25){
    console.log("Normal.")
}else if (imc >= 29.9 && imc < 30){
    console.log("Sobrepeso.")
}else{
    console.log("Obesidade.")
}

// Reescrita 5.1 (B)
const nota = Number(readlineSync.question("Digite a nota: "));
const situacao = nota >= 7? "Aprovado" : "Reprovado";
console.log(situacao);