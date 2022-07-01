notesController = {};
const Note = require('../models/Note.model');

/* GET all Notes */
notesController.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}; 

/* GET only one Note */
notesController.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note); 
}; 

/* POST a Note */
notesController.createNote = async (req, res) => {
    const { title, content, author, date } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        author: author,
        date: date
    });
    await newNote.save();
    res.json({message: 'POST - Note Created'});
}; 

/* PATCH a Note */
notesController.updateNote = async (req, res) => {
    const { title, content, author } = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title: title,
        content: content,
        author: author
    });
    res.json({message: 'PATCH - Note Updated'});
}; 

/* DELETE a Note */
notesController.deleteNote = async (req, res) => {
    const note = await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'DELETE - Note Deleted'});
}; 


module.exports = notesController;