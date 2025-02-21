import ResponseHelper from '../utils/response.util.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
// import database from '../config/database.js';
import { validationResult, matchedData } from 'express-validator';
const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;


export const login = async (req, res) => {
    let response = ResponseHelper.getResponse(
        false,
        'Something went wrong',
        {},
        400
    );
    try {
        const { prompt } = req.body;
        console.log("promptprompt :", prompt);
        const response = await axios.post(
            "https://api-inference.huggingface.co/models/bigscience/bloom",
            { 
                inputs: prompt,
                parameters: {
                    max_new_tokens: 50,
                    return_full_text: false
                }
            },
            {
                headers: { Authorization: `Bearer ${HF_API_KEY}` },
            }
        );

        console.log("Hugging Face Response:", response.data);
        res.json({ script: response.data[0].generated_text });

        response.success = true;
        response.message = "Login successfully.";
        response.data = {};
        response.status = 200;
    } catch (err) {
        console.log('error', err);
        response.message = "An exception error occured.";
        response.statue = 500;
    } finally {
        return res.status(response.status).json(response);
    }
}