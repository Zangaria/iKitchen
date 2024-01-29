import jwt from 'jsonwebtoken';


export const generateToken = (user) => {
    const payload = {
        userId: user._id, // Assuming your user object has an "_id" property
        email: user.email,
        // Add other user-related information to the payload if needed
    };

    // Set the expiration time to 60 minutes (60 seconds * 60 minutes)
    const expirationTime = 60 * 60;

    const token = jwt.sign(payload, '12222', {
        expiresIn: expirationTime,
    });

    return token;
};