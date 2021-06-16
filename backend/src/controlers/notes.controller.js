notesController = {};
const Note = require('../models/Note.model');

notesController.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}; 

notesController.getNote = (req, res) => res.json({message: 'GET - Note Request'}); 

notesController.createNote = async (req, res) => {
    const { title, content, author, date } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        author: author,
        date: date
    });
    await newNote.save();
    // console.log(newNote);
    res.json({message: 'POST - Note Created'})
}; 

notesController.updateNote = (req, res) => res.json({message: 'PUT - Note Updated'}); 

notesController.deleteNote = (req, res) => res.json({message: 'DELETE - Note Deleted'}); 


module.exports = notesController;