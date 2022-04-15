import React from "react";
import Input from "./Input";

const Login = () => {
    return(
        <form action="">
          <Input type="text" placeholder="username"></Input>
          <Input type="password" placeholder="password"></Input>
          <button type="submit">submit</button>
        </form>
    )
}

export default Login