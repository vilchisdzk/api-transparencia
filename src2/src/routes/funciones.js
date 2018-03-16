const router = require('express').Router();
const f = require('./routes/configdb');



var url3 = '/A70F03/:arch_id/:form_id';
var e3 = db.A70F03;
f.parametros(e3, url3);



//
//
// router.get('/A70F05', (req, res, next) => {
//     db.A70F05.find((err, doc) => {
//         if (err) return next(err); //Si ocurre un error
//         res.json(doc); // Si no retorna las tareas
//     });
// });
//
// router.get('/A70F03/:id', (req, res, next) => {
//     db.A70F03.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, doc) => {
//         if (err) return next(err); //Si ocurre un error
//         res.json(doc); // Si no retorna las tareas
//     });
// });

module.exports = router;
