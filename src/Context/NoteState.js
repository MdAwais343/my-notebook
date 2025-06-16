import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "684a9cbeb95db2234796859d",
      user: "684905e53dde344711c4bb62",
      title: "New Note Updated",
      description: "Please add new Notes",
      tag: "General",
      date: "2025-06-12T09:24:14.843Z",
      __v: 0,
    },
    {
      _id: "684a9cbeb95db2234796859d",
      user: "684905e53dde344711c4bb62",
      title: "New Note Updated",
      description: "Please add new Notes",
      tag: "General",
      date: "2025-06-12T09:24:14.843Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
