const Itinerary = require("../models/Itinerary");
const Comment = require("../models/Comment");

const interactionsControllers = {
  setLike: async (req, res) => {
    const id = req.body.itineraryId;
    var action = req.body.likeExist ? "$push" : "$pull";
    try {
      let newItinerary = await Itinerary.findOneAndUpdate(
        { _id: id },
        { [action]: { likes: req.body.userId } },
        { new: true }
      ).lean();
      res.json({ success: true, error: null, response: newItinerary });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.log(e);
    }
  },
  getCommentsByItineraryId: async (req, res) => {
    try {
        console.log(req.params.itineraryId)
      let commentList = await Comment.find({
        itinerary: req.params.itineraryId,
      }).populate({ path: "user", select: ["email", "image", "name"] });
      res.json({ success: true, error: null, response: commentList });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
    }
  },
  postComment: async (req, res) => {
    const { user, itinerary, message } = req.body;
    try {
      await new Comment({ user, itinerary, message }).save();
      res.json({
        success: true,
        response: "Uploaded comment with message: " + message,
        error: null,
      });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.error(e);
    }
  },
  editComment: async (req, res) => {
    try {
      let list = await Comment.findOneAndUpdate({ _id: req.body.id }, { message:req.body.message },{ new: true });
      res.json({
        success: true,
        response:list,});
    } catch (e) {
      res.json({ success: false, error: e });
      console.error(e);
    }
  },
  deleteComment: async (req, res) => {
    try {
      await Comment.findOneAndDelete({ _id: req.body.id });
      res.json({
        success: true,
        response: "Deleted comment with id" + req.body.id,
      });
    } catch (e) {
      res.json({ success: false, error: e });
      console.error(e);
    }
  },
};
module.exports = interactionsControllers;
