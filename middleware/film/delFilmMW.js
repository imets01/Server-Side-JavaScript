/**
 * Kitöröl egy filmet az adatbázisból
 * Törlés után a /mozi/:moziid/filmlist -re átirányít
 */

module.exports = function (objectrepository) {
    return (req, res, next) => {
        if((typeof res.locals.film === 'undefined')){
           
            return next();
        }

        return res.locals.film.remove(err=>{
            if(err){
                
                return next(err);
            }
            return res.redirect(`/mozi/${req.params.moziid}/filmlist`);
                   
        })
    };
};