/**
 * Betölt egy kiválasztott mozit az id-je alapján
 * Az eredményt a res.locals.mozi-ba menti
 */

module.exports = function (objectrepository) {
    const MoziModel = objectrepository.MoziModel;
    return function (req, res, next) {
        MoziModel.findOne({
            _id: req.params.moziid
        },(err, mozi)=>{
            if(err){
                return next(err);
            }
            if(!mozi){
                return res.redirect('/');
            }
            res.locals.mozi=mozi;
            return next();
        })
    };
};