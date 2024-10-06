import kafka from 'kafka-node';
import { MongoClient } from 'mongodb';
import config from '../config.js';  // Import configuration variables

// Kafka Client setup
const client = new kafka.KafkaClient({ kafkaHost: config.kafkaHost });  // Use kafkaHost from config
const consumer = new kafka.Consumer(
  client,
  [{ topic: config.kafkaTopic, partition: 0 }],  // Use kafkaTopic from config
  { autoCommit: true }
);
export const connectConsumer = async () => {
  await consumer.connect();
  console.log('Kafka Consumer connected');
};
// MongoDB Client setup
let db;

// Connect to MongoDB
MongoClient.connect(config.mongoURI)
  .then((client) => {
    db = client.db(config.sourceDB);  // Replace with your database name
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

// Kafka Consumer listens for messages
consumer.on('message', async (message) => {
  try {
    console.log('Raw message received from Kafka:', message.value);
    const payload = JSON.parse(message.value);  // Parse Kafka message to JSON
    console.log('Received payload from Kafka:', payload);

    // Insert the received payload into MongoDB
    const collection = db.collection('applications');  // Insert into 'applications' collection
    await collection.insertOne(payload);  // Insert data into MongoDB

    console.log('Payload successfully inserted into MongoDB');
  } catch (error) {
    console.error('Error processing Kafka message:', error);
  }
});

// Error handling
consumer.on('error', (err) => {
  console.error('Error with Kafka consumer:', err);
});

export const disconnectConsumer = async () => {
  await consumer.disconnect();
  console.log('Kafka Producer disconnected');
};
