/**
 * Hozzáad egy új vetitést az adatbázishoz, azaz egy kezdési időpontot, 
 * valamint azt, hogy 3D-s vagy sem az adott film
 */

module.exports = function (objectrepository) {
    const FilmModel = objectrepository.FilmModel;
    
   
    return function (req, res, next) {
        if ((typeof req.body.kezdes === 'undefined') ||
            (typeof res.locals.mozi === 'undefined')){
         return next();
        }
        const newFilm = res.locals.film;
        var kezd = req.body.kezdes;
        var dat = req.body.datepick
        if(typeof req.body.haromde !== 'undefined'){
            var de = "igen";
        }
        else var de = "nem";

        if ((req.body.kezdes.length < 1) ||
            (req.body.datepick.length < 1)){
            res.locals.empty = "igen";
            return next();
        }

        var obj = {kezdes: kezd, datum: dat, haromde: de};
        newFilm.adatok.push(obj);
        res.locals.film.save(err=>{ 
            if(err){
                return next(err);
            }
            res.locals.save = "igen"
            return next();
        })
        
    };
};