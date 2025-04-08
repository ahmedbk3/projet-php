const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (!req.session.user) return res.redirect('/login');
    res.render('index', { user: req.session.user, views: req.session.views });
});

router.get('/login', (req, res) => res.render('login'));
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'pass') {
        req.session.user = username;
        res.redirect('/');
    } else res.send('Wrong credentials');
});

module.exports = router;