import mongoose from "mongoose";

try {
    await mongoose.connect('mongodb://localhost:27017/mongooseMiddleware');
    mongoose.set('debug', true);
    console.log("Connected to MongoDB");

    const userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        age: { type: Number },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    });

    userSchema.pre("save", function (next) {
        this.updatedAt = Date.now();
        next();
    });

    const User = mongoose.model('User', userSchema);

    const newUser = await User.create({
        name: "Ali Raza",
        email: "ali@example.com",
        age: 25
    });

    console.log("New user created:", newUser);

    await newUser.updateOne({ $set: { email: 'Muzamil@gmail.com' } });
    console.log('Email updated.');

    await mongoose.disconnect();
    console.log("MongoDB connection closed.");

} catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
}
