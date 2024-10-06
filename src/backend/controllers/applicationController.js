// /backend/controllers/applicationController.js
import Application from '../models/application.js'; // Importing the application model
import { sendMessage } from '../kafka/producer.js'; // Import Kafka producer

// POST: Create a new application and send to Kafka
export const createApplication = async (req, res) => {
    try {
        const application = new Application(req.body); // Create a new application instance with the request body
        await sendMessage(req.body); // Send the application data to Kafka
        res.status(201).json(application); // Return the saved application with a 201 status code
    } catch (error) {
        res.status(400).json({ message: error.message }); // Send an error response if something goes wrong
    }
};

// GET: Fetch all applications (for testing)
export const getApplications = async (req, res) => {
    try {
        const applications = await Application.find(); // Fetch all applications from MongoDB
        res.status(200).json(applications); // Return the applications with a 200 status code
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors and send a 500 response
    }
};

