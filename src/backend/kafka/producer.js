// /backend/kafka/producer.js
import { Kafka } from 'kafkajs';
import config from '../config.js';

const kafka = new Kafka({
  clientId: config.clientID,
  brokers: [config.brokers] // Make sure this matches the Kafka broker address in your setup
});

const producer = kafka.producer();

export const connectProducer = async () => {
  await producer.connect();
  console.log('Kafka Producer connected');
};

export const sendMessage = async (message) => {
  try {
    await producer.send({
      topic: 'application_topic',  // Your Kafka topic
      messages: [{ value: JSON.stringify(message) }]
    });
    console.log('Message sent to Kafka');
  } catch (err) {
    console.error('Error sending message to Kafka:', err);
  }
};

export const disconnectProducer = async () => {
  await producer.disconnect();
  console.log('Kafka Producer disconnected');
};
