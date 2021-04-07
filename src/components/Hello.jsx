import React, { useState } from "react";
import Input from "./Input";


function Hello()
{
    const [contact, setContact] = useState({
        email: "",
        fName: "",
        lName: ""
    })
    const [isMouseOver, setIsMouseOver] = useState(false)

    function handleChange(event)
    {
        const { name, value } = event.target;
        setContact(previousValue =>
        {
            return ({
                ...previousValue,
                [name]: value
            })
        })
    }


    function mouseOver()
    {
        setIsMouseOver(true)
    }

    function mouseOut()
    {
        setIsMouseOver(false)
    }


    return (
        <div className="container">
            <form >
                <h1 id="heading">{contact.fName} {contact.lName}</h1>
                <p>{contact.email}</p>
                <Input
                    name="fName"
                    onChange={handleChange}
                    inputType="text"
                    inputPlaceholder="First name"
                    value={contact.fName}
                />
                <Input
                    name="lName"
                    onChange={handleChange}
                    inputType="test"
                    inputPlaceholder="Last Name"
                    value={contact.lName}
                />
                <Input
                    name="email"
                    onChange={handleChange}
                    inputType="test"
                    inputPlaceholder="Last Name"
                    value={contact.email}
                />
                <button
                    type="submit"
                    style={{ backgroundColor: isMouseOver ? "black" : "white" }}
                    onMouseOver={mouseOver}
                    onMouseOut={mouseOut}
                >
                    Submit
            </button>
            </form>
        </div >
    )
}

export default Hello;