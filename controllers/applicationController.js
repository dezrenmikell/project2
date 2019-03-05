const { Event } = require("../models/Chirp")

const applicationController = {
    index: (req, res) => {
      Chirp.find().then(chirps => {
        console.log(chirps)
        res.render('app/index', {chirps})
      })
    }
  }

  module.exports = applicationController;