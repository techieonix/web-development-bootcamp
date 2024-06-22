import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Hello</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1>")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})