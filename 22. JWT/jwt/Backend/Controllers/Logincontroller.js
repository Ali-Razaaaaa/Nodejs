import User from '../models/models.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET_KEY="ALIRAZA";
export default async function Login(req, res) {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required" });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        const token = jwt.sign(
        {id:user._id,username:user.username},
        SECRET_KEY,
        {expiresIn:'1h'},);

        res.status(200).json({ message: "Login successful", token});

    } catch (e) {
        console.error("❌ Login Error:", e);
        res.status(500).json({ error: "Server error" });
    }
}
