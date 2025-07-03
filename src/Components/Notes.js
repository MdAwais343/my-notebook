import React, { useState, useEffect, useRef, useContext } from "react";
import noteContext from "../Context/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
  const { notes, getNotes, editNote, deleteNote } = useContext(noteContext);

  const [currentNote, setCurrentNote] = useState({
    id: "",
    title: "",
    description: "",
    tag: "",
  });

  const handleSaveClick = () => {
    editNote(
      currentNote.id,
      currentNote.title,
      currentNote.description,
      currentNote.tag
    );
  };

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const updateNote = (note) => {
    setCurrentNote({
      id: note._id,
      title: note.title,
      description: note.description,
      tag: note.tag,
    });
    ref.current.click();
  };

  const ref = useRef(null);

  return (
    <>
      <AddNote />

      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Open Edit Modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={currentNote.title}
                    onChange={(e) =>
                      setCurrentNote({ ...currentNote, title: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={currentNote.description}
                    onChange={(e) =>
                      setCurrentNote({
                        ...currentNote,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    value={currentNote.tag}
                    onChange={(e) =>
                      setCurrentNote({ ...currentNote, tag: e.target.value })
                    }
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleSaveClick}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h2>Your Notes</h2>
          <div className="container">
            {notes.length === 0 && "No notes to display"}
          </div>
          {notes.map((note) => (
            <Noteitem
              key={note._id}
              note={note}
              deleteNote={deleteNote}
              updateNote={updateNote}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;
