import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/connect.js';

// middleware
import notFoundMiddleware from './middleware/notFound.js';
import errorHandlerMiddleware from './middleware/errorHandler.js';

app.get('/', (req, res) => {
  // throw new Error('Error');
  res.send('Welcome!');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening to port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
