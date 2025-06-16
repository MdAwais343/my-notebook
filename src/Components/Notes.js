import React from "react";
import { useContext } from "react";
import noteContext from "../Context/noteContext";
import Noteitem from "./Noteitem";
const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="container my-3">
      <div className="row">
        <h2>Your Notes</h2>
        {notes.map((note) => (
          <Noteitem key={note._id} note={note} /> // ✅ Add a unique key (like note._id or note.id)
        ))}
      </div>
    </div>
  );
};

export default Notes;
