import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper function is clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handledownClick = ()=>{
        // console.log("Upper function is clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChnage = (event)=>{
        // console.log("On CHnage");
        setText(event.target.value);
    }
    
  const [text, setText] = useState("");
    //   setText("Enter new text");
  return (
    <>
    <div className="container">
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text}  onChange={handleOnChnage}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-2" onClick={handledownClick}>Convert to lower case</button>
    </div>
    <hr />
    <div className="contaoine my-2r">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
