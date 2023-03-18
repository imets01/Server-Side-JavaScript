const renderMW = require('../middleware/renderMW');

const delFilmMW = require('../middleware/film/delFilmMW');
const getFilmekMW = require('../middleware/film/getFilmekMW');
const getFilmMW = require('../middleware/film/getFilmMW');
const saveFilmMW = require('../middleware/film/saveFilmMW');
const saveFilmStartMW = require('../middleware/film/saveFilmStartMW');
const delFilmStartMW = require('../middleware/film/delFilmStartMW');

const delMoziMW = require('../middleware/mozi/delMoziMW');
const getMozikMW = require('../middleware/mozi/getMozikMW');
const getMoziMW = require('../middleware/mozi/getMoziMW');
const saveMoziMW = require('../middleware/mozi/saveMoziMW'); 
 
const MoziModel = require('../models/mozi');
const FilmModel = require('../models/film');

module.exports = function(app) {
    const objRepo = {
        MoziModel,
        FilmModel
    }; 

    app.use(
        '/mozi/:moziid/filmlist/new/:filmid/start',
        getMoziMW(objRepo),
        getFilmMW(objRepo),
        saveFilmStartMW(objRepo),
        renderMW(objRepo, 'filmstartnew')
    );

    app.use(
        '/mozi/:moziid/filmlist/edit/:filmid/start',
        getMoziMW(objRepo),
        getFilmMW(objRepo),
        renderMW(objRepo, 'filmstartedit')
    );

    app.get(
        '/mozi/:moziid/filmlist/del/:filmid/start/:index',
        getMoziMW(objRepo),
        getFilmMW(objRepo),
        delFilmStartMW(objRepo)
    );

    app.use('/mozi/new',
        saveMoziMW(objRepo),
        renderMW(objRepo, 'mozieditnew')
    );

	app.use(
        '/mozi/edit/:moziid',
	    getMoziMW(objRepo),
        saveMoziMW(objRepo),
        renderMW(objRepo, 'mozieditnew')
    );
	
    app.get(
        '/mozi/del/:moziid',
        getMoziMW(objRepo),
        delMoziMW(objRepo)
    );

    app.use(
        '/mozi/:moziid/filmlist/edit/:filmid',
        getMoziMW(objRepo),
        getFilmMW(objRepo),
	    saveFilmMW(objRepo),
	    renderMW(objRepo, 'filmeditnew')
    );

    app.use(
        '/mozi/:moziid/filmlist/new',
        getMoziMW(objRepo),
	    saveFilmMW(objRepo),
	    renderMW(objRepo, 'filmeditnew')
    );

    app.get(
        '/mozi/:moziid/filmlist/del/:filmid',
        getFilmMW(objRepo),
	    delFilmMW(objRepo)
    );
    
    app.use(
        '/mozi/:moziid/filmlist',
        getMoziMW(objRepo),
        getFilmekMW(objRepo),
	    renderMW(objRepo, 'egymozi')
    );

    app.use('/mozi',
        getMoziMW(objRepo),
        renderMW(objRepo, 'mozieditnew')
    );

    app.use('/', getMozikMW(objRepo), renderMW(objRepo, 'index'));
};
