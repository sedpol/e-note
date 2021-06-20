import React, { useState, useEffect } from "react";
import { Note } from "../../Components/Note/Note";
import { getNotesByUserId } from "../../Services/NoteService";

export const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotesByUserId(1).then((notes) => {
      setNotes(notes);
    });
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};
