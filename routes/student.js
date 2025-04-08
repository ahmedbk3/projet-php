const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.get('/', (req, res) => {
    db.all("SELECT name, AVG(note) as avg FROM notes GROUP BY name", [], (err, rows) => {
        const students = rows.map(r => ({
            name: r.name,
            avg: r.avg.toFixed(2),
            status: r.avg >= 10 ? 'Admis' : 'Non Admis'
        }));
        res.render('students', { students });
    });
});

module.exports = router;