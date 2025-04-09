// FirePokemon.js
import Pokemon from './Pokemon'; // Change to ES module import

export class FirePokemon extends Pokemon { // Corrected export syntax
    constructor(name, hp, attackObj) {
        super(name, hp, attackObj);
        console.log("FirePokemon created:", this);
        this.type = 'fire';
    }
}
