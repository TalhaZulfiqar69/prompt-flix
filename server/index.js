import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("MongoDB Connected"))
//     .catch(err => console.log(err));

app.get("/api/user", (req, res) => {
    const data = {
        name: "Muhammad Talha Zulfiqar",
        email: "talhazee18@gmail.com",
        age: "1000",
    }
    res.send({
        message: "API is running...",
        data
    });
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
