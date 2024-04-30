//QUESTAO1

const estudante = {
    escola:"PP",
    curso:"informática",
    Serie:"2 ano",
    nome:"Ana Luisa",
    idade:"16 anos",
}
    console.log(estudante.escola, estudante.curso, estudante.Serie, estudante.nome, estudante.idad)
//QUESTAO 2 
 const mensagem = `estudante: ${estudante.nome}, ${estudante.curso}, ${estudante.escola},
  ${estudante.idade}, ${estudante.Serie}`

//QUESTAO 3
  var peso = 78
  var altura = 1.80
  var imc = peso/(altura)**2

//QUESTAO 4a
const idade_motor = 17
console.log(idade_motor>18? 'pode dirigir' : 'não pode dirigir' )

//QUESTAO 4b
var pontuacao = 1200
console.log(pontuacao>1000? 'usuário VIP' : 'usuário normal')

//QUESTAO 5 e 6
var habilitacao = true
console.log(idade_motor>=18 && habilitacao==true? 'pode dirigir' : 'nao pode dirigir')

//QUESTAO 7
var peso = 32
if(imc<18.5){
    console.log('imc no grau abaxio do normal') 
}
else if(imc < 24.9){
    console.log('imc está no grau normal')
}
else if(imc < 29.9){
    console.log('imc está no grau de obesidade')
}
else if(imc < 34.9){
    console.log('imc está no grau obesidade 1, Sinal de alerta')
}

//QUESTAO 8
switch(imc < 18.5){
    case imc < 18.5:
         console.log('IMC abaixo do normal')
    break;
}
switch (imc < 24.9){
    case imc < 24.9:
        console.log('IMC Normal')
    break;
}
switch(imc < 29.9){
    case imc < 29.9:
        console.log('IMC no grau de obesidade')
    break;
}
switch (imc < 34.9){
    case imc < 34.9:
        console.log('IMC no grau de obesidade 1')
    break;
}

//QUESTAO 9a
var valor = 5000
    while(valor < 10000){
        valor = valor + (valor * 0.3)
        console.log('o valor do salário é:', valor)
    }

//QUESTAO 9b
var numero = 0
while(numero < 60){
    numero++
    if(numero % 2 !=0){
        console.log(numero)
    }
}
//QUIESTAO 10a
for(var pares = 0; pares <=10; pares++){
    if(pares % 2 == 0){
        console.log(pares)
        }
    }

//QUESTAO 10b
for (t=1; t <=10; t++){
    console.log(t, "x 5 = ", t*5)

}

//CONDICIONAIS QUESTAO 11a
var ano_atual = 2024
var pessoa_nascimento = 2001
var idade = ano_atual - pessoa_nascimento
console.log(idade < 16? 'pode votar' : 'não pode votar')

//CONDICIONAIS QUESTAO 11b
var n1 = 10
var n2 = 10
var n3 = 30

console.log(n1 + n2 + n3, (n1+n2+n3)/3, n1 * n3 * n2, Math.max(n1,n2,n3), Math.min(n1,n2,n3))
if(n1==n2||n2==n3||n3==n1||n3==n2){
    console.log('você repetiu algum número na digitação')
}

//QUESTAO 11c
var celsius = 36
var tf = (celsius * 9/5 + 32)
console.log('a temperatura de grau em celsius para fahrenheit é', tf)

//QUESTAO 11d
var preco = 150
var parcelas = 3

if (parcelas == 1){
    preco = preco - (preco * 0.025)
}    
else if (parcelas <= 5){
    preco = preco
}
else if(parcelas < 10){
    preco = preco + (preco * 0.06)
}
else if (parcelas <= 15){
    preco = preco + (preco * 0.13)
}
console.log(`o valor de cada parcela' ${preco/parcelas}, 'a compra total deu:', ${preco}`)


//Q12a
for(n=100; n<=110; n++){
    console.log(n)
}

//Q12b
n = 10
for(c = 1; c <= n; c++){
    console.log(c)
}

//Q12c
var z = 18
if(z>0 && z <=10){
    for (tab = 1; tab <=10; tab++) {
        console.log(tab, "x", z, "=", tab*z)}
} else {console.log("num > 10")
}

//Q12d
for(ordem = 1; ordem <= 10; ordem++){
    console.log(ordem)
}
console.log("---------")
for(ordem = 10; ordem  >= 1; ordem--){
    console.log(ordem)
}
for(c = 1; c <= n; c++){
    console.log(c)
}

//QUESTAO12c
var z = 18
if(z>0 && z <=10){
    for (tab = 1; tab <=10; tab++) {
        console.log(tab, "x", z, "=", tab*z)}
} else {console.log("num > 10")
}

//QUESTAO12d
for(ordem = 1; ordem <= 10; ordem++){
    console.log(ordem)
}
console.log("---------")
for(ordem = 10; ordem  >= 1; ordem--){
    console.log(ordem)
}

//QUESTAO13a

function acessoaosite(){
    alert("Bem vindo ao site")
}
    acessoaosite()

//QUESTAO13B
var aplicacao = "aplicação"
function MostrarMensagem(){
    console.log(`Acesso a ${aplicacao} `)
}   MostrarMensagem()

//QUESTAO13c
function mostrardobro(n1){
    alert(`O dobro de ${n1} é ${n1*2}`)
}
mostrardobro(20)

//QUESTAO13d

function calcmedia(n1,n2,n3,nome){
    var media = (n1+n2+n3)/3
    alert(`${nome}, sua média é ${media}`)
}
calcmedia(8,7,9,"Luisa")

//QUESTAO13E

let alunos = [
    {nome: "cidrack", idade: 13, skills: ["JavaScript"]},
    {nome: "davi", idade: 14, skills: ['Python']},
    {nome: "Dourado", idade: 15, skills: ['JavaScript']},
    {nome: "Luisa", idade: 16, skills: ["React"] },
    { nome: "eduarda", idade: 17, skills: ["Java"]}
    ];
    function achar(funcao, skill) {
     for (let alunos of funcao) {
      if (alunos.skills.includes(skill)) {
       console.log(alunos);
            }
            else{
       console.log("não encontrado")
            }
        }
    }
    achar(alunos, "Java");


