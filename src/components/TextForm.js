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
        navigator.clipboard.writeText(text);
        props.showAlert(" Copied to clipboard","success");
    }


    const [text, setText] = useState('');
    // setText("new text");
    return (
        <>
            <div className="container" style={{color: props.mode ==='dark'?'white':' black'}}>
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode ==='dark'?'#0e0952':'white',color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
                <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>

            </div>
            <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h2>your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0? text:"Nothing to preview"}</p>

            </div>
        </>
    )
}
