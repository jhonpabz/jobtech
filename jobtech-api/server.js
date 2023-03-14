import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

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

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
