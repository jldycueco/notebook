import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  note: {
    type: String,
    required: true,
  },
});

const note = mongoose.model('Note', noteSchema);

export default note;
