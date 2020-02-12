const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    published_date: {
        type: Date,
        required: true
    }
});

module.exports = Article = mongoose.model("Article", articleSchema);
