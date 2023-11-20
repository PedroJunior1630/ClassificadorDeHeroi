let nome = "Ging";
let xp = 5780;
console.log("O herói "+nome+" tem "+xp+" de experiência.");
if (xp < 1000){
    proximaclass = 1001 - xp;
    console.log("Nível: Ferro | Próximo Nível: Bronze");
    console.log("Restante para o próximo nível: "+proximaclass)
}
if (xp >= 1001 && xp <= 2000){
    proximaclass = 2001 - xp;
    console.log("Nível: Bronze | Próximo Nível: Prata");
    console.log("Restante para o próximo nível: "+proximaclass);
}
if (xp >= 2001 && xp <= 5000){
    proximaclass = 5001 - xp;
    console.log("Nível: Prata | Próximo Nível: Ouro");
    console.log("Restante para o próximo nível: "+proximaclass);
}
if (xp >= 5001 && xp <= 7000){
    proximaclass = 7001 - xp;
    console.log("Nível: Ouro | Próximo Nível: Platina");
    console.log("Restante para o próximo nível: "+proximaclass)
}
if(xp >= 7001 && xp <= 8000){
    proximaclass = 8001 - xp;
    console.log("Nível: Platina | Próximo Nível: Ascendente");
    console.log("Restante para o próximo nível: "+proximaclass)
}
if(xp >= 8001 && xp <= 9000){
    proximaclass = 9001 - xp;
    console.log("Nível: Ascendente | Próximo Nível: Imortal");
    console.log("Restante para o próximo nível: "+proximaclass);
}
if(xp >= 9001 && xp <=10000){
    proximaclass = 10001 - xp;
    console.log("Nível: Imortal | Próximo Nível: Radiante");
    console.log("Restante para o próximo nível: "+proximaclass);
}
if(xp >= 10001){
    console.log("Nível: Radiante");
}