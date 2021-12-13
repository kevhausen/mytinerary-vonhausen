const User = require("../models/User");
const Country = require("../models/Country");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs"); //encripta y desencripta
const jwt = require('jsonwebtoken')

const authController = {
  saveUser: async (req, res) => {
      console.log('esto llega del action (variable user)')
      console.log(req.body)
    const { name, lastName, email, password, image, country } = req.body;
    let users = await User.findOne({ email });
    console.log(users);
    try {
      if (users) {
        res.json({
          response: "Email " + users.email + " is already taken",
          success: false,
          error:null
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
        }).save();
        const token = jwt.sign({user},process.env.SECRET_KEY)
        res.json({ response: {user,token}, success: true,error:null });
      }
    } catch (e) {
        console.log(e)
      res.json({ success: false, error: e, response:null });
    }
  },
  signIn: async (req, res) => {
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      let samePassword = user? bcryptjs.compareSync(password, user.password) : false;
      if (user && samePassword) {
          const token = jwt.sign({user},process.env.SECRET_KEY)
          console.log(token)
        res.json({ success: true, response: {user, token} });
      } else {
        res.json({
          success: false,
          response: "The username or password is incorrect",
        });
      }
    } catch (e) {
        console.log(e)
      res.json({ success: false, error: e.message });
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
};

module.exports = authController;