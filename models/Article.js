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
    link: {
        type: String
    }
});

module.exports = Article = mongoose.model("Article", articleSchema);
