const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumno');

router.post('/agregarAlumno',alumnoController.postAgregarAlumno);
router.get('/consultarAlumno',alumnoController.getConsultaAlumno);
router.get('/consultarAlumno2',alumnoController.getConsultaAlumno2);
router.get('/graphEjemplo',alumnoController.getGraph);

module.exports = router;