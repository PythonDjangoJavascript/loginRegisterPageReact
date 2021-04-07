import React from "react";
import Input from "./Input"


function Form(props)
{
    return (
        <form className="form">
            <Input inputType="text" inputPlaceholder="Username" />
            <Input inputType="password" inputPlaceholder="Password" />
            {!props.isRegistered && <Input inputType="password" inputPlaceholder="Confirm Password" />}
            <button type="submit">
                {props.isRegistered ? "Login" : "Register"}
            </button>
        </form>
    )
}

export default Form;