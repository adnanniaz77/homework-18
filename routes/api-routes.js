const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

// Get all Articles
router.get("/all", (req, res) => {
    Article.find()
        .then(article => res.send(article))
        .catch(e => console.log(e));
});

router.post("/create", (req, res) => {
    Article.create({
        title: req.body.title,
        text: req.body.text,
        link: req.body.link
    })
        .then(newArticle => res.send(newArticle))
        .catch(err => console.log(err));
});

module.exports = router;
