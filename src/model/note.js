import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    default: '',
  },
  note: {
    type: String,
    default: '',
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const note = mongoose.model('Note', noteSchema);

export default note;
