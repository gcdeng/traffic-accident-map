const mongoose = require('mongoose');
const initDb = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'DB connection error:'));
    db.once('open', function() {
        console.log('DB is connected');
    });
    return db;
}
module.exports = initDb;