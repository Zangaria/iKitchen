import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    // Check for the presence of the 'Authorization' header
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: Token missing' });
    }

    // Verify the token
    jwt.verify(token, '12222', (err, user) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }

        // Add the decoded user information to the request object
        req.user = user;

        // Proceed to the next middleware or route handler
        next();
    });
};
