import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
import config from './config.js'; // Correct import for ES6 modules
// Load environment variables from .env file
dotenv.config();

const uri = config.mongoURI;
 // Ensure MONGO_URI is defined in your .env file
// const secret = process.env.jwtSecret;  // Assuming you have JWT_SECRET too
//console.log('uri:', uri);
//console.log('secret:', secret);

const connectDB = async () => {
    try {
        if (!uri) throw new Error('MongoDB URI not defined in environment variables');
        console.log(config.mongoURI);
        await mongoose.connect(uri, {
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB; // Exporting the function as ES6 default export
