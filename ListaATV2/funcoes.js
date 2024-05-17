//Q1
function soma(num1, num2){
    console.log(num1 + num2)
}
    soma(10,30)

//Q2
function numImaparouPar(n1){
var par = false
    if  (n1 % 2==0) {
        par = true;
        console.log(par)
    } else {
        console.log(par)
    }
}
    numImaparouPar(20)

//Q3
function fatorial (num1){
    for(fact=1; num1>1; num1--){
        fact = fact*num1
    }
    console.log(fact)
}
    fatorial(5)


//Q4
    function verpalindromo(palavra){
    var palavranoVet = palavra.split('')
    var contrario = palavranoVet.reverse()
    var juntaPal = contrario.join('')

        if (palavra == juntaPal){
            console.log("a palavra é um palídromo");
        } 
        else{
            console.log("não é palídromo");
        }
    } 
    verpalindromo("reler")

//Q5

function contVogais(palavra){
    var Nvogais = 0;
    var palavrasVet = palavra.split('')

    for (n = 0; n <= palavrasVet.length-1; n++){
        if(palavrasVet[n] == "a" || palavrasVet[n] == "e" ||
            palavrasVet[n] == "i" || palavrasVet[n] == "o" || palavrasVet[n] == "u")
        Nvogais++
    }
    console.log(Nvogais + " vogais nessa frase.")
}
contVogais('leigo')


//Q6

function inverterString(palavra){
    var stringinver = palavra.split('')
    var contrario = stringinver.reverse()
    var junto = contrario.join('')
    
    console.log("caracteres invertidos é " + junto)
    }
    inverterString('gato')

//Q7

function areatriang(){
    var b = 12
    var h = 4
    var area = (b*h)/2
    console.log("A Área do Triângulo é " + area)
    }
    areatriang()

//Q8
function ePrimo(n1){
    if (n1 <= 0) return false
    let cont = 0
    for(var i = 1; i <= n1; i++){
        if (n1 % i == 0){
            cont++
        }
    }
    if (cont == 2){
        return true
    } else {
        return false
    }
}
var primo = ePrimo(7);
console.log(primo);


//Q9
function isfrasepalindromo(frase){
    var frasemin = frase.toLowerCase()
    var frasesemesp = frasemin.replace(/\s/g, '')
    var frasevet = frasesemesp.split('')
    var invertfrasevet = frasevet.reverse()
    var juntarfrase = invertfrasevet.join('')

    if(frasesemesp === juntarfrase){
        console.log('A frase é palíndromo.')
    } else {
        console.log("A frase não é palíndromo.")
    }
}
var frase1 = 'a base do teto desaba'
isfrasepalindromo(frase1)


//Q10
function contpalavras(frase2){
    frase2 = frase2.trim()
    if (frase2 === ""){
        return 0
    }
    return frase2.split(/\s+/).length
}
var frase2ex = 'Isto se prolongou! Nossa!'
console.log('Número de palaras na frase é ' + contpalavras(frase2ex))


//Q11
function mdc(n1, n2) {
    while (n2 !== 0) {
        var temporaria = n2;
        n2 = n1 % n2;
        n1 = temporaria;
    }
    return n1;
}
var n1 = 40
var n2 = 16
console.log(`O MDC entre ${n1} e ${n2} é ${mdc(n1,n2)}`)


//Q12
function acharmmc(n1, n2) {
    var maior = Math.max(n1, n2);
    var menor = Math.min(n1, n2);

   
    for (var w = maior; ; w += maior) {
        if (w % menor === 0) {
            return w;
        }
    }
}
var num1 = 50
var num2 = 25
console.log(`O MMC esta entre ${num1} e ${num2} é ${acharmmc(num1,num2)}`)

//Q13
function numeroArmstrong(numero1){
    const digitos = numero1.toString()
    const digito2 = digitos.length
    let soma = 0

    for (let x = 0; x < digito2; x++){
        const lala = parseInt(digitos[x])
        soma += Math.pow(lala, digito2)
    }
    return soma===numero1
}

let numero1 = 153
console.log(numeroArmstrong(numero1))


//Q14
function enesimofibonacci(ene){    
    var t1 = 0, t2 = 1
    if(ene == 0) return t1
    if(ene == 1) return t2

    for(var z = 2; z <= ene; z++){
        var temporaria2 = t2
        t2 = t1 + t2
        t1 = temporaria2
    }
    return t2
} 
var termo = 8
console.log(`O ${termo} termo da sequência é ${enesimofibonacci(termo)}`)

//Q15
function validarpangrama(frase3){
    frasemin = frase3.toLowerCase() 
    var letrasalfab = new Set()

    for (var i = 0; i < frase3.length; i++){
        var letter = frase3[i]
        if (letter >= 'a' && letter <= 'z'){
            letrasalfab.add(letter)
        }
    }
    return letrasalfab.size === 26
}
var frase3 = 'Palavras não bastam não da pra entender'
console.log('A frase é um pangrama? ' + validarpangrama(frase3))


//Q16
function calcularCosseno(angrad) {
    return Math.cos(angrad);
}

var angulo = Math.PI / 6;
var cossenoAngulo = calcularCosseno(angulo);
console.log("O cosseno do angulo é " + cossenoAngulo);