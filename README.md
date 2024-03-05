# notes app

project made during Udemy class.

Saves notes entered into terminal to local json file.

Commands available:

    node app.js add
    node app.js remove
    node app.js list
    node app.js read

Example: How to add a note:

    node app.js add --title hello --body there

This will add `{"title":"hello","body":"there"}` to `notes.json`.
