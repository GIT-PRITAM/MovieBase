import express from "express";

const app = express();
import dotenv from "dotenv";
dotenv.config();


// Middleware to parse JSON
app.use(express.json());

const PORT = 5000;

// Test route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Express server is running 🚀"
    });
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});