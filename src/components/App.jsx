import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";

const App = () => {
  // adding notes from createarea
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // console.log(note);
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  // deleting notes from notes component
  function deleteNote(id) {
    return setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => index !== id);
    });
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />

      <div className="notes-wrapper grid">
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            ></Note>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default App;
