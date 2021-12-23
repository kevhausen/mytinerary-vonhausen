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
      const newComment = new Comment({ user, itinerary, message });
      let comment = await newComment
        .save()
        .then((newComment) =>
          newComment.populate({
            path: "user",
            select: ["email", "image", "name"],
          })
        );
      res.json({
        success: true,
        response: comment,
        error: null,
      });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.error(e);
    }
  },
  editComment: async (req, res) => {
      console.log("me llega esto desde el front")
      console.log(req.body)
      const {id, message} = req.body
    try {
      let editedComment = await Comment.findOneAndUpdate(
        { _id: id},
        { message },
        { new: true }
      );
      console.log('esto devuelve el await')
      console.log(editedComment)
      res.json({
        success: true,
        response: editedComment,
      });
    } catch (e) {
      res.json({ success: false, error: e });
      console.error(e);
    }
  },
  deleteComment: async (req, res) => {
    try {
      let comment = await Comment.findOneAndDelete({
        _id: req.params.itineraryId,
      });
      res.json({ success: true, error: null, response: comment });
    } catch (e) {
      res.json({ success: false, error: e });
      console.error(e);
    }
  },
};
module.exports = interactionsControllers;
