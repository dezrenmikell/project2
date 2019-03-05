const { Event } = require("../models/Planner")

const applicationController = {
    index: (req, res) => {
      Chirp.find().then(chirps => {
        console.log(chirps)
        res.send("app Index")
      })
    }
  }

  module.exports = applicationController;