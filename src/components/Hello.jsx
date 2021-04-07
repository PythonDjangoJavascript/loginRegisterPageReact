import React, { useState } from "react";
import Input from "./Input";


function Hello()
{
    const [headingText, setHeadingTest] = useState("")
    function handleClieck(event)
    {
        setHeadingTest("Hello " + headingText + "!");
        event.preventDefault()
    }
    const [isMouseOver, setIsMouseOver] = useState(false)

    function mouseOver()
    {
        setIsMouseOver(true)
    }
    function mouseOut()
    {
        setIsMouseOver(false)
    }
    function handleChange(event)
    {
        setHeadingTest(event.target.value)
    }
    return (
        <div className="container">
            <form onSubmit={handleClieck} >
                <h1>{headingText}</h1>
                <Input
                    onChange={handleChange}
                    inputType="text"
                    inputPlaceholder="What's your name?"
                    value={headingText}
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