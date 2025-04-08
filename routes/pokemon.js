const express = require('express');
const router = express.Router();
const Pokemon = require('../pokemon/Pokemon');
const AttackPokemon = require('../models/AttackPokemon');

router.post('/battle', (req, res) => {
    const p1Atk = new AttackPokemon(10, 50, 0.2, 2);
    const p2Atk = new AttackPokemon(8, 40, 0.15, 2);

    const p1 = new Pokemon('Pikachu', 100, p1Atk);
    const p2 = new Pokemon('Charmander', 100, p2Atk);

    // Check if p1 is a Pokemon instance
    console.log(p1 instanceof Pokemon); // Should log true

    p1.attack(p2);
    p2.attack(p1);

    res.render('battle', {
        p1,
        p2,
        p1Damage: p1Atk.calculateDamage(),
        p2Damage: p2Atk.calculateDamage()
    });
});

module.exports = router;
