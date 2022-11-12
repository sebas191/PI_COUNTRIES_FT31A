
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countrysRouts = require("../controllers/countrysRouts")
const  activityRouts = require("../controllers/activityRouts")
const router = Router();
router.use("/countries",countrysRouts )
router.use('/activities', activityRouts)


module.exports = router;