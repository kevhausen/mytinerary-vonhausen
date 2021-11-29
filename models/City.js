const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    name: {type: String, require:true},
    country: {type:String, require:true},
    image: {type: String, require:true},
    description: {type:String}
})

// este se encarga de modificar la base de datos CRUD, se usa en los controladores
const City = mongoose.model('city' , citySchema)


module.exports = City

