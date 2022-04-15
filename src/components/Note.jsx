import React from "react";

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
          Delete
        </button>
      </div>
    </>
  );
};

export default Note;
