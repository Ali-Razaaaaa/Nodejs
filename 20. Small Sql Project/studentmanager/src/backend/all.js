import express from 'express';
import mysql2 from 'mysql2/promise';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const db = await mysql2.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'samsung',
      database: 'practice',
    });

    const [rows] = await db.execute('SELECT * FROM students'); 
    await db.end(); 

    res.json(rows); 

  } catch (e) {
    console.error('error', e);
    res.status(500).json({ error: 'Server error' }); 
  }
});

export default router;
