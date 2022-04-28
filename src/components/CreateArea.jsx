import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
// import Input from "./Input";
// import TextArea from "./TextArea";

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitNote(e) {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  return (
    <div className="create-area-container flex bg-light">
      <form action="">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Note Title"
            value={note.title}
          />
        )}
        <textarea
          onClick={() => setIsExpanded(true)}
          onChange={handleChange}
          name="content"
          type="text"
          placeholder="Take a Note..."
          rows={isExpanded ? 3 : 1}
          cols="20"
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote} size="medium" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
