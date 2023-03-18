/**
 * Megjelenítésért felel, megjeleníti a sablon értékeit
 */

 module.exports = function(objectrepository, viewName) {
    return function(req, res) {
        res.render(viewName);
    };
};