import express from 'express';
import 'babel-polyfill';
import Note from '../model/note';

const router = express.Router();

//Retrieve all Notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.json(err);
  }
});

//Add a specific Note
router.post('/', async (req, res) => {
  try {
    const newNote = new Note({
      title: req.body.title,
      note: req.body.note,
    });

    const addNote = await newNote.save();
    res.json(addNote);
  } catch (err) {
    res.json(err);
  }
});

//Edit a specific Note
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

//Delete a specific Note
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
