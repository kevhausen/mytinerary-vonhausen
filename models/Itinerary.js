const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    name: {type: String, require: true},
    image: {type:String, require: true},
    price: {type:Number, require: true},
    duration: {type:Number, require: true},
    likes: {type:Number, default:0},
    hashtags: {type:[String], require:true},
    comments:{type:[String]},
    city:{type:String,require:true}
})

const Itinerary = mongoose.model('itinerary' , itinerarySchema)

module.exports = Itinerary