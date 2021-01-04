const fs = require('fs');
const chalk = require('chalk');

const removeNote = title => {
    const notes = loadNotes();
    const notesToKeep = notes.filter( note => note.title !== title );
    if (notesToKeep.length === notes.length) {
        console.log(chalk.bgRed('No note found!'));
    } else {
        console.log(chalk.bgGreen(`${title} was removed!`));
        saveNotes(notesToKeep);
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const dupNote = notes.find( note => note.title === title);

    // debugger

    if ( !dupNote ) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.bgGreen('New note added'));
    } else {
        console.log(chalk.bgRed('Note title taken'));
    }
}

const listNotes = () => {
    console.log(chalk.bgBlue('Your notes'));
    loadNotes().forEach( note => console.log(chalk.red(note.title)) );
}

const readNote = (title) => {
    const note = loadNotes().find( note => note.title === title);
    if (note) {
        console.log(chalk.green.inverse(note.title), note.body);
        // console.log(chalk.yellow(note.body));
    } else {
        console.log(chalk.bgRed('Note not found.'));
    }
}


const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}