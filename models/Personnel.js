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
        ref: "User"
    }
});

const Statement = new Schema({
    content: String,
    createdAt:{
        type: Date,
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        skills: []
    },
    references: [{
        name: String,
        phone: Number,
        relationship: String,
        details: String
    }],
    reviews: [Review]
});

module.exports = {
    Statement: mongoose.model("Statement", Statement),
    Review: mongoose.model("Review", Review)
};