const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Mozi = db.model('Mozi', {
    nev: String,
    cim: String,
});

module.exports = Mozi;