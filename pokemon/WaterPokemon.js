// WaterPokemon.js
import Pokemon from './Pokemon'; // Change to ES module import

export class WaterPokemon extends Pokemon { // Change to ES module export
    constructor(name, hp, attackObj) {
        super(name, hp, attackObj);
        console.log("WaterPokemon created:", this);
        this.type = 'water';
    }
}
