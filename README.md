# kalvi
Full stack application using MERN stack. Kafka for Integrations 

School Management SaaS Application - README
Overview
This project is a School Management SaaS application designed to streamline various administrative tasks for educational institutions. The platform provides a central hub to manage student data, teacher assignments, and applications, with future expansions planned for features like video file handling and AI-generated summaries.

The primary goal of this project is to gain full-stack development experience while also learning how to integrate multiple business systems and components such as databases, APIs, and machine learning models. My focus has been on delivering dynamic, scalable, and secure solutions using modern web technologies.

Key Features
Student Management: Allows for CRUD operations on student data.
Teacher and Staff Management: Manage teacher information and assignments.
Application Processing: Collects student applications and forwards them to a Kafka queue for processing before storing them in MongoDB.
Machine Learning Integration: Leveraging Hugging Face for NLP tasks such as summarization (pending proper deployment and hosting).
Learning Outcomes
Throughout the development process, I focused on the following key areas:

Node.js & Express.js: Backend development with RESTful API endpoints.
MongoDB: Database setup, CRUD operations, and managing data persistence.
Podman: Containerization of the app's services, such as MongoDB and Kafka.
Kafka: Implementing a message queue system for processing asynchronous tasks.
Hugging Face Integration: AI model integration for potential future features like summarizing class content.
JWT Authentication: Securing routes and managing user sessions.
ES6 Syntax: Adopting modern JavaScript conventions across the app.
Technology Stack
Frontend: Simple web-based UI, future iterations may target mobile.
Backend: Node.js, Express.js, Kafka for messaging.
Database: MongoDB, with support for both structured and unstructured data.
Machine Learning: Hugging Face AI integration for NLP features.
Containerization: Podman for managing services and scaling the application.
Future Enhancements
Mobile Expansion: Developing a mobile-friendly interface.
Advanced AI Features: Implementing machine learning models for automatic grading and personalized recommendations.
Video Handling: Support for uploading and managing class video recordings.
