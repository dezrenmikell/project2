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

const Event = new Schema({
    eventId: Number ,
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
    personnel: [{
        type: Schema.Types.ObjectId,
        ref: "Personnel",

    }],
    spectators: [{
        type: Schema.Types.ObjectId,
        ref: "Spectator",
    }],
    reviews: [Review]
});

module.exports = {
    Event: mongoose.model("Event", Event),
    // Review: mongoose.model("Review", Review)
};