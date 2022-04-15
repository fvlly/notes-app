import React, { useState } from "react";
// import Input from "./Input";
// import TextArea from "./TextArea";

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitNote(e) {
    onAdd(note);
    setNote({
        title:'',
        content:''
    })
    e.preventDefault();
  }

  return (
    <div className="create-area-container flex bg-light">
      <h2>Create Note</h2>
      <form action="">
        <input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Note Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          type="text"
          placeholder="Note Content"
          rows="10"
          cols="20"
          value={note.content}
        />
        <button onClick={submitNote} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
