const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

router.get("/", (req, res) => {
    res.send("hi");
});

router.get("/all", (req, res) => {
    Article.find()
        .then(article => res.send(article))
        .catch(e => console.log(e));
});

// router.post("/", (req, res) => {});

module.exports = router;
