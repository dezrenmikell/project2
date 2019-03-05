const { Event } = require("../models/Planner")

const applicationController = {
    index: (req, res) => {
      Event.find().then(events => {
        console.log(events)
        res.send("app Index")
      })
    }
  }

  module.exports = applicationController;