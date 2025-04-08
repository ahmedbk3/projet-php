const express = require('express');
const router = express.Router();

const FirePokemon = require('../pokemon/FirePokemon');
const WaterPokemon = require('../pokemon/WaterPokemon');
const AttackPokemon = require('../models/AttackPokemon');

router.get('/', (req, res) => {
    const p1 = new FirePokemon("Dracaufeu", 100, new AttackPokemon(5, 15, 0.3, 2));
    const p2 = new WaterPokemon("Carapuce", 100, new AttackPokemon(6, 14, 0.2, 1.5));

    // Sanity check
    console.log("p1 is instance of FirePokemon:", p1 instanceof FirePokemon);
    console.log("p1.attack is a function:", typeof p1.attack);  // Should print "function"
    console.log("p1:", p1);  // Log the whole p1 object to check inheritance

    while (!p1.isDead() && !p2.isDead()) {
        p1.attack(p2);
        if (!p2.isDead()) p2.attack(p1);
    }

    const winner = p1.isDead() ? p2.name : p1.name;
    res.render('pokemon', { winner });
});

module.exports = router;
