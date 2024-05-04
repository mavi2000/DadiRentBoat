import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import UserRoute from './routes/user.route.js';
import ContactRoute from './routes/contact.route.js';

const app = express();
const PORT = process.env.PORT || 3800;

// middlewares
app.use(express.json());
app.use(cors());

// apis / routes
app.use('/', UserRoute);
app.use('/', ContactRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('DB Connected');
    app.listen(PORT, () => {
      console.log(`Dadi Rent Boat app listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
