let vitorias = 400;
let derrotas = 294;
let saldo =  vitorias - derrotas;
console.log("Vitorias: "+vitorias+" Derrotas: "+derrotas);
console.log("Saldo: "+saldo);
if(saldo<10){
    console.log("Rank: Ferro")
}
if(saldo>= 11 && saldo <= 20){
    console.log("Rank: Bronze");
}
if(saldo >= 21 && saldo <= 50){
    console.log("Rank: Prata");
}
if(saldo >= 51 && saldo <= 80){
    console.log("Rank: Ouro");
}
if(saldo >= 81 && saldo <= 100){
    console.log("Rank: Diamante");
}
if(saldo >= 101){
    console.log("Rank: Imortal");
}
