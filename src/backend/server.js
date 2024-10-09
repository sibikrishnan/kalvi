 // Load environment variables from .env
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import studentRoutes from './routes/studentRoutes.js'; // Ensure to include the .js extension // Import student routes
import authRoutes from './routes/authRoutes.js';
import healthRoutes from './routes/healthRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import config from './config.js';
 // New application routes
import connectDB from './connectDB.js'; // Import the connectDB function
const app = express();
const PORT = config.nodePORT; //Load variables from config.js file
//const secret= process.env.jwtSecret || 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8550b6fdc9b80480d9b4b0500b5d531234f';
//console.log('secret :', secret)
import { connectProducer, disconnectProducer } from './kafka/producer.js';
import { connectConsumer, disconnectConsumer } from './kafka/consumer.js';

// Connect to MongoDB
connectDB();

// Connect Kafka producer and consumer on server startup
connectProducer();
connectConsumer();

// Middleware
app.use(express.json()); // For parsing application/json

// Simple route for testing the server
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Use the student routes
app.use('/api/students', studentRoutes);

//Use the application routes
app.use('/api/applications', applicationRoutes);

// Use the auth routes
app.use('/api', authRoutes);

// Use the healthCheck routes
app.use('/api/healthcheck', healthRoutes);

//use the ai routes
app.use('/api/ai', aiRoutes)