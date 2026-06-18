import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Use separated backend routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Backend Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
