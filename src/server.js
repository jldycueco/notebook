import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import mongoose from 'mongoose';
import noteRouter from './routes/note';

const app = express();
app.use(cors());

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Mongoose
const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('db is connected'));

//Route
app.use('/note', noteRouter);

//Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
