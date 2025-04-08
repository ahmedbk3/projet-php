class Pokemon {
    constructor(name, hp, attack) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
    }

    isDead() {
        return this.hp <= 0;
    }

    attack(opponent) {
        let dmg = Math.floor(Math.random() * (this.attack.max - this.attack.min + 1)) + this.attack.min;
        if (Math.random() * 100 <= this.attack.prob) dmg *= this.attack.special;
        opponent.hp -= dmg;
    }
}
module.exports = Pokemon;