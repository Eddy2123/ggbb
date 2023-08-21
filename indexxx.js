//
/*
Exercío 1
REsposta 1
false
Resposta 2
false
Resposta 3
true

Execícios 2
*/
//EM esse caso nao faz uma suma so junta os valore da prompt por causa de que esta sumando string
/*
Exercío 3
Basicamente tem que trocar os dois valores do prompt pra numbers e depois fazer a suma de essas duas varialves 

let primeiroNumero = prompt ('digite um numero')
let segundoNumero = prompt('digite outro numero')
const resultado = Number(primeiroNumero)
const resultado1 = Number (segundoNumero)
const suma= resultado + resultado1
console.log(suma) */

//exercicio 1 codigo
const idade = prompt("qual é sua idade")
const idadeAmigo = prompt("qual é a idade de seu melhor amigo(a)")

let comparacaoIdades = Number(idade) > Number(idadeAmigo)
console.log("sua idade é maior do que a do seu melhor amigo?", comparacaoIdades)
console.log(Number(idade) - Number(idadeAmigo))

//exercicio 2 codigo
const numero = prompt("introduça um numero par")
const numeroPar = Number(numero)
console.log(numeroPar % 2)
//com uns numeros pares da 0
//com uns numeros impar da 1

//exercicio 3
const ano = prompt("sua idade")
const ano2 = Number(ano)

console.log("sua idade em meses é", ano2 * 12)
console.log("sua idade em dias é", ano2 * 365)

const horas = 365 * 24

console.log("sua idade em horas é", ano2 * horas)


//exercicio 4
const primeiroNumero = prompt("introduça o primeiro numero")
const segundoNumero = prompt("introduça o segundo numero")



console.log("primeiro numero", primeiroNumero)
console.log("segundo numero", segundoNumero)

const primeiroNumeroN = Number(primeiroNumero)
const segundoNumeroN = Number(segundoNumero)

console.log("o primeiro numero é maior que segundo?", primeiroNumeroN > segundoNumeroN)
console.log("o primeiro numero é igual ao segundo?", primeiroNumeroN === segundoNumeroN)
const div1 = primeiroNumeroN % segundoNumeroN
const div2 = segundoNumeroN % primeiroNumeroN



const restDiv1 = div1 === 0
let restDiv2 = div2 >= 1

restDiv2 = !restDiv2

console.log("o primeiro numero é divisivel pelo segundo?", restDiv1)
console.log("o segundo numero é divisivel pelo primeiro?", restDiv2)

console.log(div1)
console.log(div2)
