/**
 * Elmenti vagy frissíti egy film adatait
 * Ha létezik ilyen film frissíti az adatait egyébként újat hoz létre
 * Mentés után a /mozi/:moziid/new/:filmid/start -ra átirányít
 */

module.exports = function (objectrepository) {
    const FilmModel = objectrepository.FilmModel;
    return function (req, res, next) {
        if ((typeof req.body.cim === 'undefined') ||
            (typeof req.body.mufaj === 'undefined') ||
            (typeof req.body.hossz === 'undefined') ||
            (typeof res.locals.mozi === 'undefined')){
                return next();
        }

        const newFilm = res.locals.film ? res.locals.film : new FilmModel();
        newFilm.cim = req.body.cim;
        newFilm.mufaj = req.body.mufaj;
        newFilm.hossz = req.body.hossz;
        newFilm._vetito = res.locals.mozi._id;

        if ((req.body.cim.length < 1) ||
            (req.body.mufaj.length < 1) ||
            (req.body.hossz.length < 1)){
            res.locals.empty = "igen";
            return next();
        }

        newFilm.save(err=>{ 
            if(err){
                return next(err);
            }
            res.locals.save = "igen";
            return res.redirect('/mozi/' + res.locals.mozi._id + '/filmlist/new/' + newFilm._id + '/start');
        })
    };
};