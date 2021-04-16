const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tarea');

router.post('/agregarTarea',tareaController.postAgregarTarea);

module.exports = router;