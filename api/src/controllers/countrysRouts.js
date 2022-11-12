const { Op } = require("sequelize"); 
const {Country, Activity} = require("../db");
const { Router } = require('express');

const router = Router();


router.get("/", async (req, res)=>{
    const name = req.query.name

    let getAllCountrys = await Country.findAll()
    if(name){   //si name existe
       getAllCountrys = await Country.findAll({
        where : {
          name :{[Op.iLike]:`${name}%` }}  // para tomar  min o may
       })
    }
  if(!getAllCountrys.length ){  
  return  res.status(404).send("Pais no existe")
  }
    res.status(200).json(getAllCountrys)

})

// GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes

router.get('/:id', async (req,res, next) => {
  try {
    const id = req.params.id.toUpperCase();
    if(id) {
      let countryId = await Country.findByPk(id, {
        include: Activity
      })
      countryId?
      res.json(countryId) :
      res.json({ err: 'Id incorrecto' });
      /* res.send('Contry not found') */
    }
  } catch (error) {
    next(error)
  }
 
})


module.exports = router