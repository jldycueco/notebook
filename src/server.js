import express from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config';
import noteRouter from './routes/note';

const { port, mongoUri } = config;

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('db is connected'));

// Route
app.use('/api/note', noteRouter);

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Port
app.listen(port, () => console.log(`Server running on port ${port}`));
