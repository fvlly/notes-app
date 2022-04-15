import React from "react";

const Input = ({ name,type,placeholder})=> {
    return(
        <input  name={name} type={type} placeholder={placeholder} />
    )
}

export default Input