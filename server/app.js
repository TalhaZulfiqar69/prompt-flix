import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import logger from "morgan";
import express from "express";
import createError from "http-errors" ;
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index.js";
import connectDB from "./config/database.js";

const app = express();

dotenv.config();
connectDB();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);
app.use((req, res, next) => {
    next(createError(404));
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
