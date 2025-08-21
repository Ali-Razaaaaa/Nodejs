import jwt from 'jsonwebtoken';
const SECRET_KEY = "ALIRAZA";

export default function verifyToken(req, res, next)
{
    
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({ error: "Access denied" });

    const token = authHeader.split(" ")[1];
    
    try
    {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded; // payload attach
        next(); // proceed to route
    }
    catch
    {
        res.status(401).json({ error: "Invalid token" });
    }
}
