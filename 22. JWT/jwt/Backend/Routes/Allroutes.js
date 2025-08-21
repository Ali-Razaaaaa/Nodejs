import Register from "../Controllers/Registercontroller.js";
import Login from '../Controllers/Logincontroller.js';
import verifyToken from "../Middlware/Verifytoken.js";
import express from 'express';


const router=express.Router();

router.post('/register',Register);
router.post('/login',Login);


router.get("/dashboard", verifyToken, getDashboard);

export default router;