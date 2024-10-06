import jwt from 'jsonwebtoken';
// import the jwt secret storeed in .env, JWT_SECRET
import dotenv from 'dotenv';
dotenv.config();// Load environment variables from .env file
 
const JWT_Secret = process.env.jwtSecret || 'solar' ;// Load environment variables from .env
// Middleware function to authenticate JWT
const authenticateJWT = (req, res, next) => {
    // Get token from the request header
    
    const token = req.header('Authorization')?.split(' ')[1]; // Expected format: "Bearer <token>"
    console.log("Token:", token); // Log the token to check if it's being received
    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }
    try {
        // Verify token using the secret from .env
        console.log('JWT_Secret:', JWT_Secret)
        console.log('TOKEN:', token)
        const user = jwt.verify(token, JWT_Secret);
        console.log('decoded:', user) // Using the secret stored in environment variables 
        req.user = user; // Attach the decoded user info to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        
        res.status(403).json({ message: 'Invalid or expired token' });
    }
};

export default authenticateJWT;
