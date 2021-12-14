const User = require("../models/User");
const Country = require("../models/Country");
const bcryptjs = require("bcryptjs"); //encripta y desencripta
const jwt = require("jsonwebtoken");

const authController = {
  saveUser: async (req, res) => {
    const { name, lastName, email, password, image, country, googleUser } =
      req.body;
    let user = await User.findOne({ email });
    try {
      if (user) {
        if (user.googleUser) {
          const token = jwt.sign({ user }, process.env.SECRET_KEY);
          return res.json({
            response: user,
            success: true,
            error: null,
            token: token,
          });
        }
      }
      if (user) {
        res.json({
          response: null,
          success: false,
          error: [
            {
              message: "Email " + user.email + " is already taken",
              path: ["email"],
            },
          ],
        });
      } else {
        const passwordHashed = bcryptjs.hashSync(password, 10);
        let user = await new User({
          name,
          lastName,
          email,
          password: passwordHashed,
          image,
          country,
          googleUser,
        }).save();
        const token = jwt.sign({ user }, process.env.SECRET_KEY);

        res.json({ response: user, success: true, error: null, token: token });
      }
    } catch (e) {
      res.json({ success: false, error: e, response: null });
    }
  },
  signIn: async (req, res) => {
    const { email, password, googleUser } = req.body;
    try {
      let user = await User.findOne({ email });

      if (user) {
        let samePassword = user
          ? bcryptjs.compareSync(password, user.password)
          : false;
        if (user && samePassword) {
          const token = jwt.sign({ user }, process.env.SECRET_KEY);
          res.json({
            success: true,
            response: user,
            error: null,
            token: token,
          });
        } else if (user.googleUser && !googleUser) {
          res.json({
            success: false,
            response: null,
            error: "Invalid Email",
          });
        } else {
          res.json({
            success: false,
            response: null,
            error: "The username or password is incorrect",
          });
        }
      } else {
        res.json({
          success: false,
          response: null,
          error: "Email is not registered",
        });
      }
    } catch (e) {
      res.json({ success: false, error: e.message, response: null });
    }
  },
  getUsers: async (req, res) => {
    try {
      let users = await User.find();
      res.json({ response: users, success: true });
    } catch (e) {
      res.json({ success: false, error: e });
    }
  },
  getCountries: async (req, res) => {
    try {
      let countries = await Country.find();
      res.json({ response: countries });
    } catch (e) {
      console.error(e);
    }
  },
  uploadCountries: async (req, res) => {
    try {
      let quantity = req.body.length;
      await Country.insertMany(req.body);
      res.json({ info: "Added " + quantity + " countries", success: true });
    } catch (e) {
      res.json({ success: false, error: e });
      console.error(e);
    }
  },
  modifyUser: async (req, res) => {
    try {
      await User.findOneAndUpdate({ email: req.body.email }, { ...req.body });
      res.json({ response: true });
    } catch (e) {
      console.error(e);
      res.json({ response: false });
    }
  },
  authUser: (req, res) => {
    try {
      const userAuth = req.user;
      res.json({ success: true, response: userAuth, error: null });
    } catch (e) {
      res.json({ success: false, response: null, error: e });
    }
  },
};

module.exports = authController;
