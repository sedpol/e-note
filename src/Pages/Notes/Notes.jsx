import React, { useState, useEffect } from "react";
import { AddNote } from "../../Components/AddNote/AddNote";
import { Note } from "../../Components/Note/Note";
import { getNotesByUserId } from "../../Services/NoteService";

import "./Notes.css";

export const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotesByUserId(1).then((notes) => {
      setNotes(notes);
    });
  }, []);

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
      <AddNote />
    </div>
  );
};
