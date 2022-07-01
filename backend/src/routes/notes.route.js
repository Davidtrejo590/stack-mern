const { Router } = require('express');
const router = Router();
const { getNote, createNote, updateNote, deleteNote, getNotes} = require('../controlers/notes.controller');

router.route('/')
    .get(getNotes)
    .post(createNote)

router.route('/:id')
    .get(getNote)
    .patch(updateNote)
    .delete(deleteNote)


module.exports = router;