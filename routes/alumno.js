const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumno');

router.post('/agregarAlumno',alumnoController.postAgregarAlumno);

module.exports = router;