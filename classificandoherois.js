// Variáveis com os valores de nome e experiência armazenadas
let nome = "Ging";
let xp = 10001;

// Mensagem mostrando o nome do herói e seu XP
console.log("O herói "+nome+" tem "+xp+" de experiência.");


// Estruturas de decisões para definir o nível
if (xp < 1000){
    // Varivael que armazena o valor necessário para próximo nível
    proximaclass = 1001 - xp;
    
    // Mensagens que diz que o nível, o próximo e o restante para avançar.
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
