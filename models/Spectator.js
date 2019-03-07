const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Review = new Schema({
    content: String,
    rating: Number,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Event"
    }
});

const Spectator = new Schema({
    discount: String,
    interests: [],
    createdAt:{
        type: Date,
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        events: []
    },
    
    pastShows: [],
    wishList:[],
    reviews: [Review]
});

module.exports = {
    Event: mongoose.model("Spectator", Spectator),
    // Review: mongoose.model("Review", Review)
};