// app.js
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import path from 'path';
import authRoutes from './routes/auth.js'; // Change to ES module import
import studentRoutes from './routes/student.js'; // Change to ES module import
import pokemonRoutes from './routes/pokemon.js'; // Change to ES module import

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

// Middleware for session view count
app.use((req, res, next) => {
    if (!req.session.views) req.session.views = 1;
    else req.session.views++;
    next();
});

// Mount routes to app
app.use('/', authRoutes);           // Auth routes on root
app.use('/students', studentRoutes); // Student routes on /students
app.use('/pokemon', pokemonRoutes);  // Pokemon routes on /pokemon

app.listen(3000, () => console.log('Server on http://localhost:3000'));
