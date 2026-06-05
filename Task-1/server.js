const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static("public"));
app.set("view engine", "ejs");

  
app.get("/", (req, res) => {
    res.render("index");
});

// Form Submission
app.post("/submit", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    console.log("Form Submitted Successfully ")
    console.log(req.body)
    res.render("result", {
        username: name,
        email: email,
        phone: phone
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});