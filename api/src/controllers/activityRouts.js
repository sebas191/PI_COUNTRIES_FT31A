const { Router } = require('express');
const { Country, Activity } = require('../db');
const router = Router();



router.get('/', async (req, res, next) => {
    try {
        const findActivity = await Activity.findAll({             
           include: {
               model: Country,
  
            }
        })
     
        return res.json(findActivity)
    } catch (error) {
        next(error)
    }
  });
  

router.post('/', async (req, res, next) => {

    try {
        const { name, difficulty, duration, season, country } = req.body

        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
        // const pais = await Country.findByPk(country)
        // await newActivity.addCountry(pais)
        country.map( async (count) => {
            const countryDb = await Country.findOne({
                where: {
                    id: count
                }
            })
           await newActivity.addCountry(countryDb)//
        })
        //res.json(newActivity)
        res.status(200).send('Activity created successfully') 
    } catch (error) {
        next(error)
    } 
});


module.exports = router;