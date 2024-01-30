import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();



export const authMiddleware = (req, res, next) => {
    // Check for the presence of the 'Authorization' header
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: Token missing' });
    }

    // Verify the token  // ADD env Amitoz 30/01/24
    jwt.verify(token, '12222' , (err, user) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }

        // Add the decoded user information to the request object
        req.user = user;

        // Proceed to the next middleware or route handler
        next();
    });
};
