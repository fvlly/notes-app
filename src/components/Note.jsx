import React from "react";


 const Note = ({title,content})=>{
     return(
         <>
         <div className="notes-container ">
             <h2 className="note-header">{title}</h2>
             <p className="note-content">{content}</p>
         </div>
         </>
     )

}

export default Note