import express from 'express';
import { createApplication, getApplications } from '../controllers/applicationController.js';

const router = express.Router();

// POST route to submit an application
router.post('/', createApplication);

// GET route to fetch all applications (for testing)
router.get('/', getApplications);

export default router;
