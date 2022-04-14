import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const App = () => {
  return (
    <>
      <Header />

      <div className="notes-wrapper grid">
      {notes.map(note =>{
          return <Note key={note.key} title={note.title} content={note.content}></Note>
      })}
      </div>
      <Footer />
    </>
  );
};

export default App;
