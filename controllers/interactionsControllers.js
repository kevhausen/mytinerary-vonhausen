const { findOne } = require('../models/Itinerary')
const Itinerary = require('../models/Itinerary')

const interactionsControllers = {
    setLike: async (req,res)=>{
        const id = req.body.itineraryId
        const likeExist = req.body.likeExist
        if(likeExist){
            try{
                let newItinerary = await Itinerary.findOneAndUpdate({_id:id},{$push:{likes: req.body.userId}},{new:true})
                console.log(newItinerary)
                res.json({success: true,error:null, response:newItinerary})

            }catch(e){
                console.log(e)
                res.json({ success: false, error: e, response: null })

            }
        }else{
            try{
                let newItinerary = await Itinerary.findOneAndUpdate({_id:id},{$pull:{likes: req.body.userId}},{new:true})
                console.log(newItinerary)
                res.json({success: true,error:null, response:newItinerary})

            }catch(e){
                console.log(e)
                res.json({ success: false, error: e, response: null })

            }
        }
    }
}
module.exports = interactionsControllers 