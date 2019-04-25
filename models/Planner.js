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
        ref: "User",
        
    }
});

const Event = new Schema({
    name: String,
    content: String,
    image: String,
    createdAt:{
        type: Date,
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        events: [],
        needs: [],
    },
});

module.exports = {
    Event: mongoose.model("Event", Event),
    // Review: mongoose.model("Review", Review)
};