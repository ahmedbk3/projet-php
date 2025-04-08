class AttackPokemon {
    constructor(minAtk, maxAtk, critChance, critMultiplier) {
        this.minAtk = minAtk;
        this.maxAtk = maxAtk;
        this.critChance = critChance;
        this.critMultiplier = critMultiplier;
    }

    calculateDamage() {
        const base = Math.floor(Math.random() * (this.maxAtk - this.minAtk + 1)) + this.minAtk;
        const isCrit = Math.random() < this.critChance;
        return isCrit ? base * this.critMultiplier : base;
    }
}

module.exports = AttackPokemon;
