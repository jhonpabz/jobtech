import mongoose from 'mongoose';

const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;

// const username = process.env.MONGO_DB_USERNAME;
// const password = process.env.MONGO_DB_PASSWORD;
// const connectionString =
//   'mongodb+srv://<username>:<password>@cluster0.mzu0l2a.mongodb.net/?retryWrites=true&w=majority';
