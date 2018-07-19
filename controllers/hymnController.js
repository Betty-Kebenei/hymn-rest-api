const Hymn = require('../models/hymnModel');


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

//GET all hymns
exports.fetchAllHymns = function (res) {
    Hymn.find({}, function(error, hymns) {
        if(error) {
            return next(error);
        }
        // res.send(hymns);
        console.log(hymns);
    });
};

//GET by id
exports.fetchHymnById = function (req, res) {
    Hymn.findById(req.params.id, function (error, hymn) {
        if(error) {
            return next(error);
        }
        res.send(hymn);
    });
};
