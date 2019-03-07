const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

// initialize the schema with a configuration object
const User = new Schema({
    // email, password, and chirps are our properties
    name: String,
    phone: Number,
    email: String,
    password: String,
    website: String,
    phone: Number,
    typez: String,
    events: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event"
        // ref means reference another model. In this case it's called Chirp
        // We'll come back around to the concept of references in a later lesson.
      }
    ]

  });

module.exports = mongoose.model("User", User);