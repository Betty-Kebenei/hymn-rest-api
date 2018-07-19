const Hymn = require('../models/hymn.model');


//POST a hymn
exports.createHymn = function (req, res) {
    let hymn = new Hymn({
        name: req.body.name,
        stanzas: req.body.stanzas
    });
    hymn.save(function (error) {
        if(error) {
            return next(error);
        }
        res.send('Hymn by the name ' + (req.body.name).toUpperCase() + ' created successfully');
    })
};

