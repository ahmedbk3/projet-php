// WaterPokemon.js
const Pokemon = require('./Pokemon').default;

class WaterPokemon extends Pokemon {
    constructor(name, hp, attackObj) {
        super(name, hp, attackObj);
        console.log("WaterPokemon created:", this);
        this.type = 'water';
    }
}

module.exports = WaterPokemon;
