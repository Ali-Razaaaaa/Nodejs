import mongoose from "mongoose";

try {
    await mongoose.connect('mongodb://localhost:27017/mongoosedatabase');
    mongoose.set('debug', true);
    console.log("Connected to MongoDB");

    // ✅ Define schema
    const userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        age: { type: Number },
        isActive: { type: Boolean, default: true }
    });

    // ✅ Create model
    const User = mongoose.model('User', userSchema);

    // ✅ Create and save one user
    const newUser = await User.create({
        name: "Ali Raza",
        email: "ali@example.com",
        age: 25
    });

    console.log("New user created:", newUser);

    // ✅ Close the connection
    await mongoose.disconnect();
    console.log("MongoDB connection closed.");

} catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
}
