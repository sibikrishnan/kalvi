import express from 'express';
import Student from '../models/studentModel.js';  // Import the Student model
import authenticateJWT from '../middleware/auth.js';  // Import the authentication middleware
const router = express.Router();
import * as dotenv from 'dotenv';
dotenv.config();// Load environment variables from .env file
// Load environment variables from .env


// Create a new student
router.post('/', async (req, res) => {
    // POST a new student
    try {
        //check if student is exists
        const existingStudent = await Student.findOne({ email: req.body.email });
        if (existingStudent) {
            return res.status(400).json({ message: 'Student with this email already exists.' });
        }

        const student = new Student(req.body); // Create a new student instance from the request body
        await student.save(); // Save the student to the database
        console.log('results: ', student)
        res.status(201).json(student); // Respond with the created student and a 201 status code
    } catch (error) {
        console.error('Error saving student:', error);
        res.status(400).json({ message: 'Error saving student', error }); // Respond with error
    }
});

// Get all students
router.get('/', authenticateJWT, async (req, res) => {
    try {
        const students = await Student.find();
        //console.log('Fetched Students:', students);
        res.json(students);
       // next()
    } catch (error) {
        //console.error('Error fetching students:', error);
        res.status(500).json({ error: error.message });
    }
});
  

// Update student route
router.put('/:id', async (req, res) => {
    console.log("PUT request received for ID:", req.params.id); // Log the ID
    console.log("Updated Data:", req.body);
    const studentId = req.params.id; // Extract student ID from URL
    const updatedData = req.body; // Extract updated data from the request body
     // Log the updated data
    try {
        // Find student by ID and update it
        const updatedStudent = await Student.findByIdAndUpdate(studentId, updatedData, { new: true });
        if (!updatedStudent) {
            return res.status(404).send('Student not found'); // Handle student not found
        }
        res.status(200).json(updatedStudent); // Return the updated student
    } catch (error) {
        res.status(400).send('Error updating student: ' + error.message); // Handle errors
    }
});

// Delete student route
router.delete('/:id', async (req, res) => {
    const studentId = req.params.id; // Extract student ID from URL

    try {
        // Find student by ID and delete it
        const deletedStudent = await Student.findByIdAndDelete(studentId);
        if (!deletedStudent) {
            return res.status(404).send('Student not found'); // Handle student not found
        }
        res.status(200).send('Student deleted successfully'); // Confirmation of deletion
    } catch (error) {
        res.status(400).send('Error deleting student: ' + error.message); // Handle errors
    }
});



export default router;