// Load environment variables from .env// Load environment variables from .env
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import  User  from '../models/user.js'; // Import User model
 // Loads environment variables
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file
const jwtSecret = process.env.jwtSecret || 'solar';

const router = express.Router();

// JWT secret from .env

// Register a new user
router.post('/register', [
    body('username').isString().notEmpty(), // Validate username
    body('password').isLength({ min: 6 }) // Validate password
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds = 10

        // Create a new user
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Error registering user: ' + error.message);
    }
});

//const jwt = require('jsonwebtoken');


// Login a user
router.post('/login', [
    body('username').isString().notEmpty(),
    body('password').notEmpty(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const username = req.body.username;
    const password = req.body.password;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).send('Invalid credentials');
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        // Generate a JWT
        const token = jwt.sign({'id': user._id}, jwtSecret, { expiresIn: '1h' }); // Replace with a secure secret

        res.status(200).json({ 'token': token }); // Return the token to the client
    } catch (error) {
        res.status(500).send('Error logging in: ' + error.message);
    }
});


export default router;

