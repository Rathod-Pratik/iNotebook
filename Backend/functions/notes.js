const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../Model/Note");
const { body, validationResult } = require("express-validator");
const mongoose = require("mongoose");

//Route 1 : get all the notes using "/api/notes/getuser".login require
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 2 :Add notes using "/api/notes/getuser".login require
router.post(
    "/addnotes",
    fetchuser,
    [
      body("title", "Enter a valid title").isLength({ min: 3 }),
      body("description", "Description must be at least 5 characters").isLength({ min: 5 }),
    ],
    async (req, res) => {
      try {
        const { title, description, tag } = req.body;
  
        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
  
        const currentDate = new Date();
  
        // Format date and time
        const formattedDate = currentDate.toISOString().split("T")[0];
        let hours = currentDate.getHours();
        const minutes = currentDate.getMinutes().toString().padStart(2, "0");
        hours = hours % 12 || 12;
        const formattedTime = `${hours}:${minutes}`;
  
        // Create note with date and time
        const note = new Note({
          date: formattedDate,
          time: formattedTime,
          title,
          description,
          tag,
          user: req.user.id,
        });
  
        // Save the note to the database
        const savedNote = await note.save();
        res.json(savedNote);
      } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send("Some error occurred");
      }
    }
  );
  

//Route 3 :Update notes using "/api/notes/updatenode".login require
router.put("/updatenode/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    //Create new note
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }

    node = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("some error occured");
  }
});

//Route 3 :delete notes using "/api/notes/deletenote".login require
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send("Invalid ObjectId");
    }

    // Find the note to be deleted
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Note not found");
    }

    // Check if the user is authorized to delete the note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }

    // Delete the note
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ success: "Note has been deleted", note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
