import User from '../models/models.js';
import bcrypt from 'bcryptjs';

export default async function Register(req, res) {
    console.log("🚀 Register function called");
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        console.log("User saved successfully");
        res.status(201).json({ message: "User registered successfully" });

    } catch (e) {
        console.error("❌ Error:", e);
        res.status(500).json({ error: "Failed to register user" });
    }
}