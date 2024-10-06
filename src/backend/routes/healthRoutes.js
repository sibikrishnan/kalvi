import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Health Check Route for MongoDB
router.get('/mongodb', async (req, res) => {
  try {
    await mongoose.connection.db.command({ ping: 1 });
    res.status(200).send('MongoDB is connected and healthy');
  } catch (err) {
    res.status(500).send('MongoDB is down');
  }
});

export default router;

