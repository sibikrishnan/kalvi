import express from 'express';
import { HfInference } from '@huggingface/inference';
import config from '../config.js'; 

const router = express.Router();
const hf = new HfInference(config.huggingFaceToken); // Use your Hugging Face API token
const modelName = config.modelName; 

router.post('/', async (req, res) => {
    const userInput = req.body.input; // Assume you send { input: 'your question' }
    try {
        const response = await hf.textGeneration({
            model: modelName,
            inputs: userInput,
            options: { wait_for_model: true },
            timeout: 60000, 
        });
        res.status(200).json(response);
    } 
    catch (error) {
        console.error('Error calling Hugging Face API:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

export default router;
