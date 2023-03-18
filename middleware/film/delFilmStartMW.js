/**
 * Kitörölli egy film egy kezdési időpontját az adatbázisból
 * Törlés után a /mozi/:moziid/filmlist/edit/:filmid/start -re átirányít
 */

module.exports = function (objectrepository) {
    
    return (req, res, next) => {
        const FilmModel = objectrepository.FilmModel;
        FilmModel.updateOne({ _id: req.params.filmid}, { $pull: { adatok: { kezdes: req.params.index}}},
            (err) => {
                if(err){
                    return next(err);
                }
                return res.redirect(`/mozi/${req.params.moziid}/filmlist/edit/${req.params.filmid}/start`); 
            });
    };
};