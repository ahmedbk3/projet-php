// Pokemon.js

class Pokemon {
    constructor(name, hp, attackObj) {
        this.name = name;
        this.hp = hp;
        this.attackObj = attackObj;  // AttackPokemon instance
    }

    attack(opponent) {
        const damage = this.attackObj.calculateDamage();
        console.log(`${this.name} attacks ${opponent.name} for ${damage} damage!`);
        opponent.takeDamage(damage);
    }

    takeDamage(damage) {
        this.hp -= damage;
        if (this.hp <= 0) {
            this.hp = 0;
            console.log(`${this.name} has fainted!`);
        }
    }

    isDead() {
        return this.hp === 0;
    }
}

module.exports = Pokemon;
