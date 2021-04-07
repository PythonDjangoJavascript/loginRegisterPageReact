import React from "react";

function Input(props)
{
    return (
        <input
            value={props.value}
            onChange={props.onChange}
            type={props.inputType}
            placeholder={props.inputPlaceholder}
        />
    )
}

export default Input;