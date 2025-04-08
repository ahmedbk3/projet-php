// FirePokemon.js
const Pokemon = require('./Pokemon').default;

class FirePokemon extends Pokemon {
    constructor(name, hp, attackObj) {
        super(name, hp, attackObj);
        console.log("FirePokemon created:", this);
        this.type = 'fire';
    }
}

module.exports = FirePokemon;
