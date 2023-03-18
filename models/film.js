const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Film = db.model('Film', {
    cim: String,
    adatok: [
        {
            kezdes: String,
            datum: String,
            haromde: String
        }
    ],
    mufaj: String,
    hossz: String,
    _vetito: {
        type: Schema.Types.ObjectId,
        ref: 'Mozi'
    }
});

module.exports = Film;