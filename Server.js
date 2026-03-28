const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let reports = [];

app.post("/report", (req, res) => {
    const report = {
        id: Date.now(),
        description: req.body.description,
        location: req.body.location,
        time: new Date()
    };

    reports.push(report);
    res.send("Report submitted anonymously");
});

app.get("/reports", (req, res) => {
    res.json(reports);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});