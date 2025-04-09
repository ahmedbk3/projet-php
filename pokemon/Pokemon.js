// Pokemon.js
export default class Pokemon { // Exporting the Pokemon class as an ES module
    constructor(name, hp, attackObj) {
        this.name = name; // Name of the Pokémon
        this.hp = hp; // Hit points of the Pokémon
        this.attackObj = attackObj; // Instance of AttackPokemon
    }

    // Method to attack another Pokémon
    attack(opponent) {
        const damage = this.attackObj.calculateDamage(); // Calculate damage using attack object
        console.log(`${this.name} attacks ${opponent.name} for ${damage} damage!`);
        opponent.takeDamage(damage); // Inflict damage on the opponent
    }

    // Method to handle taking damage
    takeDamage(damage) {
        this.hp -= damage; // Reduce HP by damage amount
        if (this.hp <= 0) {
            this.hp = 0; // Ensure HP does not go below 0
            console.log(`${this.name} has fainted!`);
        }
    }

    // Method to check if the Pokémon is dead
    isDead() {
        return this.hp === 0; // Returns true if HP is 0
    }
}
