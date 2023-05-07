import cors from 'cors';
import express from 'express';
const app = express();
import dotenv from 'dotenv';
import 'express-async-errors';
import morgan from 'morgan';
dotenv.config();
// DB and authenticateUser
import connectDB from './db/connect.js';

// routers
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

// middleware
import notFoundMiddleware from './middleware/notFound.js';
import errorHandlerMiddleware from './middleware/errorHandler.js';
import authenticateUser from './middleware/auth.js';

app.use(cors());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.get('/api/v1', (req, res) => {
  res.json({ msg: 'API' });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

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
