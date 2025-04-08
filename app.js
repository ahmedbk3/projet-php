const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

app.use((req, res, next) => {
    if (!req.session.views) req.session.views = 1;
    else req.session.views++;
    next();
});

const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/student');
const pokemonRoutes = require('./routes/pokemon');

app.use('/', authRoutes);
app.use('/students', studentRoutes);
app.use('/pokemon', pokemonRoutes);

app.listen(3000, () => console.log('Server on http://localhost:3000'));