const {User}= require('../models/User');
const {Event} = require("../models/Planner")

const applicationController = {
    index: (req, res) => {
      Event.find().then(events => {
        res.render('app/index',{events})
      })
    }
  }

  module.exports = applicationController;