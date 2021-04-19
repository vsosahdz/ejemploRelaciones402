const router = require('express').Router();
const juegoController = require('../controllers/juego');

router.get('/pruebaGET',juegoController.getPrueba);
router.post('/pruebaPOST',juegoController.postPrueba);

module.exports = router;