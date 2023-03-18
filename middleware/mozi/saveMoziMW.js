/**
 * Elmenti vagy frissíti egy mozi adatait
 * Ha létezik ilyen mozi frissíti az adatait egyébként újat hoz létre
 * Törlés után a / -re átirányít
 */

module.exports = function (objectrepository) {
    const MoziModel = objectrepository.MoziModel;
    return function (req, res, next) {
        if ((typeof req.body.nev === 'undefined') ||
            (typeof req.body.cim === 'undefined')){
         return next();
        }
        
        const newMozi = res.locals.mozi ? res.locals.mozi : new MoziModel();
        newMozi.nev = req.body.nev;
        newMozi.cim = req.body.cim;

        newMozi.save(err=>{
            if(err){
                return next(err);
            }
            return res.redirect('/');
        })
        
    };
};