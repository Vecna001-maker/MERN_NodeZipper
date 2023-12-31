
const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();



app.get('/api/notes', (req,res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req,res) => {
    const note = notes.find((n)=> n._id === req.params.id);

    res.send(note);
    
});

app.get('/', (req,res) => {
   res.send("API is running...");
});

const PORT = process.env.port || 5000;

app.listen(PORT, console.log(`Server started at PORT ${PORT}`)); 