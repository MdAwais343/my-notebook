import React from "react";
import { useContext } from "react";
import noteContext from "../Context/noteContext";
const NoteItem = (props) => {
  const { note, deleteNote, updateNote } = props;
  const context = useContext(noteContext);
  return (
    <div className="col-md-4">
      <div className="card my-3 shadow border border-dark">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div>
              <i
                className="fa-solid fa-trash mx-2 text-danger"
                onClick={() => deleteNote(note._id)}
              ></i>
              <i
                className="fa-solid fa-pen-to-square mx-2 text-success"
                onClick={() => updateNote(note)}
              ></i>
            </div>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
