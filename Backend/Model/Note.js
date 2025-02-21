const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String
    },
    date: {
        type: String,
    },
    time: {
        type: String,
    }

});

const notes = mongoose.model("notes", notesSchema);

module.exports = notes;