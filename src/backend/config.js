// config.js

export default {
    kafkaHost: 'containers_kafka_1:9092',  // Kafka host configuration
    mongoURI: 'mongodb://admin:admin@mongodb-container:27017/',  // MongoDB connection UR
    kafkaTopic: 'application_topic',
    sourceDB: 'kalvi_db' ,
    clientID: 'school-management',
    nodePORT: '5000',
    brokers: 'containers_kafka_1:9092',
    modelName: 'sibikrishnan/school-management',
    huggingFaceToken: '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'
  };
  