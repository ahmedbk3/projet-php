// database.js
import sqlite3 from 'sqlite3'; // Change to ES module import
const db = new sqlite3.Database(':memory:', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the in-memory SQLite database.');
    }
});

db.serialize(() => {
    db.run("CREATE TABLE notes (name TEXT, note REAL)");
    const stmt = db.prepare("INSERT INTO notes VALUES (?, ?)");
    stmt.run("Aymen", 11);
    stmt.run("Aymen", 7);
    stmt.run("Skander", 15);
    stmt.run("Skander", 9);
    stmt.finalize();
});

export default db; // Change to ES module export
