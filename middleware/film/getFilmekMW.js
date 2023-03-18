/**
 * Betölti az adott mozi összes filmjét
 * Az eredményt a res.locals.film-be menti
 */

module.exports = function (objectrepository) {
    const FilmModel = objectrepository.FilmModel;
    return function (req, res, next) {
        if ((typeof res.locals.mozi === 'undefined')){
            return next();
        }
        if((typeof req.body.filter !== 'undefined') &&
            (req.body.filter.length > 1)){
            var filt = req.body.filter.toString();
            return FilmModel.find({
                adatok : { $elemMatch : { datum : filt} }
            },(err, films)=>{
                if(err){
                    return next(err);
                }
                res.locals.film=films;
                return next();
            })
        }
        

        FilmModel.find({_vetito: res.locals.mozi._id},(err, films)=>{
                if(err){
                    return next(err);
                }
                res.locals.film = films;
                return next();
            })
    };
};