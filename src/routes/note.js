import express from 'express';
import Note from '../model/note';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const notes = await Note.find().select('-__v');
    res.json(notes);
  } catch (err) {
    res.json(err);
  }
});

router.get('/:noteId', async (req, res) => {
  try {
    const updateNote = await Note.findById({
      _id: req.params.noteId,
    });
    res.json(updateNote);
  } catch (err) {
    res.json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newNote = new Note({
      title: req.body.title,
      content: req.body.content,
    });

    const addNote = await newNote.save();
    res.json(addNote);
  } catch (err) {
    res.json(err);
  }
});

router.put('/:noteId', async (req, res) => {
  try {
    const updateNote = await Note.findByIdAndUpdate(
      { _id: req.params.noteId },
      req.body,
      { upsert: true, new: true },
    ).exec();
    res.json(updateNote);
  } catch (err) {
    res.json(err);
  }
});

router.delete('/:noteId', async (req, res) => {
  try {
    const deleteNote = await Note.deleteOne({
      _id: req.params.noteId,
    });
    res.json(deleteNote);
  } catch (err) {
    res.json(err);
  }
});

export default router;
