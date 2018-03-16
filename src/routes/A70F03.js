const router = require('express').Router();
const mongojs = require('mongojs');

// var db = mongojs('root:root@127.0.0.1/transparencia', ['A70F03']);
var db = mongojs('admin:abc123@127.0.0.1/transparencia', ['A70F03']);

router.get('/A70F03', (req, res, next) => {
    db.A70F03.find((err, doc) => {
        if (err) return next(err); //Si ocurre un error
        res.json(doc); // Si no retorna las tareas
    });
});

router.get('/A70F03/arch/:arch_id', (req, res, next) => {
    var arch = parseInt(req.params.arch_id);
    db.A70F03.find({arch_id: arch},(err, doc) => {
        if (err) return next(err); //Si ocurre un error
        res.json(doc); // Si no retorna las tareas
    });
});


router.get('/A70F05', (req, res, next) => {
    db.A70F05.find((err, doc) => {
        if (err) return next(err); //Si ocurre un error
        res.json(doc); // Si no retorna las tareas
    });
});

router.get('/A70F03/:id', (req, res, next) => {
    db.A70F03.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, doc) => {
        if (err) return next(err); //Si ocurre un error
        res.json(doc); // Si no retorna las tareas
    });
});

module.exports = router;
