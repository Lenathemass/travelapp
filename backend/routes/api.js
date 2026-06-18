import express from 'express';

const router = express.Router();

// Sample API route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the separate backend route!' });
});

// You can add more routes here
// router.post('/data', (req, res) => { ... });

export default router;
