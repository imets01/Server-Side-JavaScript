/**
 * Kitöröl egy mozit az adatbázisból
 * Törlés után a / -re átirányít
 */

module.exports = (objectrepository) => {
    return (req, res, next) => {
        if(typeof res.locals.mozi === 'undefined'){
            return next();
        }

        return res.locals.mozi.remove(err=>{
            if(err){
                return next(err);
            }
            return next();        
        })
    };
};