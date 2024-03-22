const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    readFromFile('./db/note.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    // console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
        title,
        text,
        // id: crypto.randomUUID()
    };

    readAndAppend(newNote, './db/note.json');
    res.json(`note added successfully`);
    } else {
        res.error('Error in adding note');
    }
});

module.exports = notes;