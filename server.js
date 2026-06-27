const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({ message: "Server is running successfully 🚀" });
});

// GET API
app.get("/users", (req, res) => {
    res.json([]);
});

// POST API
app.post("/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and Email required"
        });
    }

    res.status(201).json({
        message: "User created",
        user: { name, email }
    });
});

// PORT
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});