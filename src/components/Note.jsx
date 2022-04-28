import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const Note = ({ title, content, id, onDelete }) => {
  function handleClick() {
    onDelete(id);
  }

  return (
    <>
      <div className="notes-container ">
        <h2 className="note-header">{title}</h2>
        <p className="note-content">{content}</p>
        <button className="delete-btn" onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </>
  );
};

export default Note;
