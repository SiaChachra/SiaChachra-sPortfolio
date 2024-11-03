const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve a default message at the root URL
app.get("/", (req, res) => {
    res.send("Welcome to the Contact Form Server!");
});

// Route to handle POST requests at /submit-contact
app.post("/submit-contact", (req, res) => {
    const { name, email, message } = req.body;
    if (name && email && message) {
        res.json({ message: "Form submitted successfully!" });
    } else {
        res.status(400).json({ message: "All fields are required." });
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
