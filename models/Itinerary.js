const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    userName: {type: String, require: true},
    userImage: {type:String, require: true},
    itineraryName: {type: String, require: true},
    itineraryImage: {type:String, require: true},
    price: {type:Number, require: true},
    duration: {type:Number, require: true},
    likes: {type:Number, default:0},
    hashtags: {type:[String], require:true},
    comments:{type:[String]},
    city:{type:[{type:mongoose.Types.ObjectId, ref:"city"}]}
})

const Itinerary = mongoose.model('itinerary' , itinerarySchema)

module.exports = Itinerary