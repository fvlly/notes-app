import React from "react";

const TextArea = ({ name, type, placeholder, cols, rows }) => {
  return (
    <textarea
      name={name}
      type={type}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
