/**
 * Betölt egy kiválasztott filmet az id-je alapján
 * Az eredményt a res.locals.film-be menti
 */

module.exports = function (objectrepository) {
    const FilmModel = objectrepository.FilmModel;
    return function (req, res, next) {
        FilmModel.findOne({
            _id: req.params.filmid
        },(err, film)=>{
            if(err){
                return next(err);
            }
            if(!film){
                return next(err);
            }
            res.locals.film=film;
            return next();
        })
    };
};