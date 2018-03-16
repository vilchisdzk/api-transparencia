const router = require('express').Router();
const mongojs = require('mongojs');

// var db = mongojs('root:root@127.0.0.1/transparencia', ['A70F03']);
//Informacion de la base de datos
var bd = 'admin:hola123@127.0.0.1/transparencia';
var colleccion = 'A70F03';

//conectarse a la base ded atos
var db = mongojs(bd, [colleccion]);

/////////////////////////////
// FUNCIONES
//////////////////////////////
function busqueda(e, url){
  router.get(url, (req, res, next) => {
      e.find((err, doc) => {
          if (err) return next(err); //Si ocurre un error
          res.json(doc); // Si no retorna las tareas
      });
  });
}

//parametros de busqueda
var url1 = '/A70F03';
var e1 = db.A70F03;
f.busqueda(e1, url1);


function parametros(e2, url2){
  router.get(url2, (req, res, next) => {
      var arch = parseInt(req.params.arch_id);
      var form = parseInt(req.params.form_id);
      e2.find({arch_id: arch, form_id: form},(err, doc) => {
          if (err) return next(err); //Si ocurre un error
          res.json(doc); // Si no retorna las tareas
      });
  });
}

var url3 = '/A70F03/:arch_id/:form_id';
var e3 = db.A70F03;
f.parametros(e3, url3);

// function parametros2(e3, arrayUrl){
//   var url3 = '';
//
//   for (var i = 0; i < arrayUrl.length; i++) {
//     url3 = url3+arrayUrl[i];
//   }
//
//   router.get(url3, (req, res, next) => {
//       var arch = parseInt(req.params.arch_id);
//       var form = parseInt(req.params.form_id);
//       e3.find({arch_id: arch, form_id: form},(err, doc) => {
//           if (err) return next(err); //Si ocurre un error
//           res.json(doc); // Si no retorna las tareas
//       });
//   });
// }
//
// var url2 = '/A70F03/:arch_id/:form_id';
// var e2 = db.A70F03;
// var arrayUrl2 = ["/A70F03","/:arch_id","/:form_id"];
// parametros(e2, arrayUrl2);

module.exports = router;
