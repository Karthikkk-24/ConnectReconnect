import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/connect_reconnect', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
