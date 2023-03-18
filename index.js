// const db = require('./config/db');
// const MoziModel = require('./models/mozi');
// const FilmModel = require('./models/film');

// let newMozi = new MoziModel();
// newMozi.nev = 'Allee mozi'
// newMozi.cim ='Allee utca 3';
// newMozi.save((err)=>{
//     console.log(err);

//     let egyFilm = new FilmModel();
//     egyFilm.cim = 'A menu';
//     egyFilm.hossz = '120 perc';
//     egyFilm.mufaj = 'thriller';
//     egyFilm._vetito = newMozi;

//     egyFilm.save((err)=>{
//       console.log(err);
//     });
// });

const express = require('express');
const app = express();
const session = require('express-session')
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: 'vq98gtcq9iu7983z8sx',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(express.static('static'));

require('./route/index')(app);

app.use((err,req,res,next)=>{
  res.end('There was a problem');
  console.log(err);
})

app.listen(3000, function () {
    console.log('Hello :3000');
});