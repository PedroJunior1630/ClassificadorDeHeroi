class Hero{
    constructor(name, age, type){
        this.nameHero = name;
        this.ageHero = age;
        this.typeHero = type;
        console.log(`O herói ${this.nameHero} tem ${this.ageHero} anos e é um ${this.typeHero}`)
    }
    attack(typeHeroHability){
        if(typeHeroHability === "mago"){
            let typeHeroAttack = "Magia";
            console.log(`É do tipo ${typeHeroHability} e pode atacar usando ${typeHeroAttack}`);
        }
        else if(typeHeroHability === "monge"){
            let typeHeroAttack = "Artes Marciais";
            console.log(`É do tipo ${typeHeroHability} e pode atacar usando ${typeHeroAttack}`);
        }
        else if(typeHeroHability === "guerreiro"){
            let typeHeroAttack = "Espada";
            console.log(`É do tipo ${typeHeroHability} e pode atacar usando uma ${typeHeroAttack}`)
        }
    }
}

genericHero1 = new Hero("Chrollo", 28, "mago");
genericHero1.attack("mago");
genericoHero2 = new Hero("Gon", 12, "monge");
genericoHero2.attack("monge");
genericHero3 = new Hero("Giorno", 15, "guerreiro");
genericHero3.attack("guerreiro");
