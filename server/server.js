import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import partsRoutes from './routes/parts.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/parts', partsRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});