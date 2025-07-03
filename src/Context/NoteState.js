import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  //Get all Notes
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg0OTA1ZTUzZGRlMzQ0NzExYzRiYjYyIn0sImlhdCI6MTc0OTYxNjEyMn0.ksK96VXyVQtNJ196EIwq42RQYcc72ODvjArWwFCkOmM",
      },
    });
    const json = await response.json();
    setNotes(json);
  };
  //Add a Note
  const addNote = async (title, description, tag) => {
    //Api Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg0OTA1ZTUzZGRlMzQ0NzExYzRiYjYyIn0sImlhdCI6MTc0OTYxNjEyMn0.ksK96VXyVQtNJ196EIwq42RQYcc72ODvjArWwFCkOmM",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = {
      _id: "684a9cbeb95db2234796859d4",
      user: "684905e53dde344711c4bb62",
      title: title,
      description: description,
      tag: tag,
      date: "2025-06-12T09:24:14.843Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    try {
      await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg0OTA1ZTUzZGRlMzQ0NzExYzRiYjYyIn0sImlhdCI6MTc0OTYxNjEyMn0.ksK96VXyVQtNJ196EIwq42RQYcc72ODvjArWwFCkOmM",
        },
      });
      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg0OTA1ZTUzZGRlMzQ0NzExYzRiYjYyIn0sImlhdCI6MTc0OTYxNjEyMn0.ksK96VXyVQtNJ196EIwq42RQYcc72ODvjArWwFCkOmM",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    //Logic to Edit in Client
    const newNotes = notes.map((note) =>
      note._id === id
        ? { ...note, title: title, description: description, tag: tag }
        : note
    );
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
