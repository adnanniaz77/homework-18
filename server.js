const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const connection = mongoose.connection;

// Connection to mongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/class-work", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Check Connection
connection.on("error", err => console.log(err));
connection.once("open", () => console.log("Connected to mongoDB"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// api Routes
app.use("/api", require("./routes/api-routes"));

// html Routes
app.use("/", require(""));

// Listening to PORT
app.listen(PORT, () => {
    console.log("listening at http://localhost:" + PORT);
});
