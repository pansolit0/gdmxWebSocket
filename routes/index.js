const express = require('express');
const router = express.Router();


//para ocupar administrar las rutas de manera correcta hay que
//importar correctamente su función desde su js como en el ejemplo de abajo

// const {obtenerDatosChart,exportarExcel,promedioCatorceDias, obtenerDatosChartGrafico, obtenerDatosTabla} = require('../controllers/dataController');
// const { loginUsuario } = require('../controllers/authController')


//ejemplos de rutas.

// router.post('/datosChart', obtenerDatosChart); //Funcion dentro de la API PHP: apichart
// router.post('/exportExcel', exportarExcel); //Funcion dentro de la API PHP: apiExport
// router.post('/promedioCatorce', promedioCatorceDias); //Funcion dentro de la API PHP: Apirestful
// router.post('/grafico', obtenerDatosChartGrafico);
// router.post('/tabla', obtenerDatosTabla);


module.exports = router;