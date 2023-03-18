/**
 * Betölti az összes mozit
 * Az eredményt a res.locals.mozi-ba menti
 */

module.exports = function (objectrepository) {
    const MoziModel = objectrepository.MoziModel;
    return function (req, res, next) {
        MoziModel.find({},(err, mozis)=>{
            if(err){
                return next(err);
            }
            res.locals.mozi = mozis;
            return next();
        })
    };
};