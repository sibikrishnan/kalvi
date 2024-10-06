// config.js

export default {
    kafkaHost: 'containers_kafka_1:9092',  // Kafka host configuration
    mongoURI: 'mongodb://admin:admin@mongodb-container:27017/',  // MongoDB connection UR
    kafkaTopic: 'application_topic',
    sourceDB: 'kalvi_db' ,
    clientID: 'school-management',
    port: '5000',
    brokers: 'containers_kafka_1:9092' // Kafka topic for the application data
  };
  