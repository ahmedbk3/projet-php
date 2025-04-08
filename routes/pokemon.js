const express = require('express');
const router = express.Router();
const AttackPokemon = require('../models/AttackPokemon');
const Pokemon = require('../pokemon/Pokemon');

// Example route to handle battle logic
router.post('/battle', (req, res) => {
    const p1 = new Pokemon('Pikachu', 10, 50, 0.2, 2); // Example pokemon
    const p2 = new Pokemon('Charmander', 8, 40, 0.15, 2); // Example pokemon

    // Simulating attack
    const p1Attack = new AttackPokemon(5, p1.attack, p1.critChance, p1.critMultiplier);
    const p2Attack = new AttackPokemon(5, p2.attack, p2.critChance, p2.critMultiplier);

    const p1Damage = p1Attack.calculateDamage();
    const p2Damage = p2Attack.calculateDamage();

    res.render('battle', { p1, p2, p1Damage, p2Damage }); // Display the battle results
});

module.exports = router;
