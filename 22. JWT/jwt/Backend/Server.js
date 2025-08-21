import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import Allroutes from '../Backend/Routes/Allroutes.js';
const app = express();

app.use(express.json());
app.use(cors());

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
        console.log("MongoDB Connected Successfully");
    } catch (e) {
        console.error("DB Connection Failed:", e);
        process.exit(1);
    }
};

connectDB();

app.use('/',Allroutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});