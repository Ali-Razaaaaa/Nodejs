import express from 'express';
import mysql2 from 'mysql2/promise';

const router = express.Router();

router.post('/', async (req, res) => {
  const content = req.body;

  const name = content.name;
  const email = content.email;
  const age = content.age;

  try {
    const db = await mysql2.createConnection({
      host: 'localhost',
      password: 'samsung',
      user: 'root',
      database: 'practice',
    });

    await db.execute('insert into students(name,email,age) Values (?, ?, ?)', [name, email, age]);
    await db.end();
    res.json({ data: 'Successfully sent' });

  } catch (e) {
    console.error('Database error:', e);
    res.json({ data: 'Error Sending' });
  }
});

export default router;