const axios = require("axios");
const {Country, Activity} = require("../db");


const createDb = async () => {
    const apiUrl = await axios.get(`https://restcountries.com/v3/all`)
    const apiInfo = await apiUrl.data.map(el =>{
        return {
            //id//
            id : el.cca3,
            name : el.name.common,
            image : el.flags[1],
            continent : el.region!= null ? el.region : "No data",
            capital: el.capital!= null ? el.capital[0] : "No data",
            subregion: el.subregion,
            area: el.area,
            population:el.population
        }
    })
  //llenando mi tabla
    // return apiInfo 
    const newDB = await  Country.bulkCreate(apiInfo)
    return newDB
}

module.exports = { createDb }