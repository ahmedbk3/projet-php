const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE notes (name TEXT, note REAL)");
    const stmt = db.prepare("INSERT INTO notes VALUES (?, ?)");
    stmt.run("Aymen", 11);
    stmt.run("Aymen", 7);
    stmt.run("Skander", 15);
    stmt.run("Skander", 9);
    stmt.finalize();
});

module.exports = db;