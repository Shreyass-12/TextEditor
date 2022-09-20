import React, { useState } from 'react'


// console.log(useState('Enter text here2'));

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("upper case was clicked");
        let newText = text.toUpperCase();
        // setText("you have clicked on handleUpClick")
        setText(newText);
        props.showAlert(" Converted to UpperCase","success");
    }
    const handleOnChange = (event) => {
        console.log("OnChange");
        setText(event.target.value);
    }
    const handleClearClick = (event) => {
        let newText = '';
        setText(newText);
        props.showAlert(" Cleared the text","success");
    }
    const handleCopy = (event) => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied to clipboard","success");
    }


    const [text, setText] = useState('');
    // setText("new text");
    return (
        <>
            <div className="container" style={{color: props.mode ==='dark'?'white':' black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

            </div>
            <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h2>your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0? text:"enter something in the textbox to preview it here"}</p>

            </div>
        </>
    )
}
