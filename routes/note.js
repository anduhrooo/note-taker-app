const note = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// const { v4: uuidv4 } = require('uuid');

note.get('/', (req, res) => {
    readFromFile('./db/note.json').then((data) => res.json(JSON.parse(data)));
});

note.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newTip = {
        title,
        text,
        // tip_id: uuidv4(),
    };

    readAndAppend(newTip, './db/note.json');
    res.json(`note added successfully`);
    } else {
        res.error('Error in adding note');
    }
});

module.exports = note;