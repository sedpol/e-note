import React, { useState, useEffect } from "react";
import { AddNote } from "../../Components/AddNote/AddNote";
import { Note } from "../../Components/Note/Note";
import { addNotesByUserId, getNotesByUserId } from "../../Services/NoteService";

import "./Notes.css";

export const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotesByUserId(1).then((notes) => {
      setNotes(notes);
    });
  }, []);

  const addNoteHandler = () => {
    const id = notes.length + 1;
    addNotesByUserId(1, {
      id: id,
      title: `${id}. Note`,
      content: "This is a note",
    }).then((resultNotes) => {
      console.log(resultNotes);
      setNotes(resultNotes);
    });
  };

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
      <AddNote addNoteHandler={addNoteHandler} />
    </div>
  );
};
