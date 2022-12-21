import React, { useState } from "react";

export default function TextForm(props) {
  
    const handleUpClick = ()=>{
        // console.log("Upper function is clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into Upper Case", "success")
    }
    const handledownClick = ()=>{
        // console.log("Upper function is clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into Lower Case", "success")
      }
    const handleOnChnage = (event)=>{
        // console.log("On CHnage");
        setText(event.target.value);
    }
    const handleOnClear = (event)=>{
        let newText = "" 
        setText(newText);
        props.showAlert("Cleared text", "success")
    }
    
  const [text, setText] = useState("");
    //   setText("Enter new text");
  return (
    <>
    <div className="container" style={{color: props.mode==="dark"?'white':'black'}}>
      <h3 className="mb-4">{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor: props.mode==="dark"?'#474343':'white' , color: props.mode==="dark"?'white':'black'}} onChange={handleOnChnage}></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to upper case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handledownClick}>Convert to lower case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleOnClear}>Clear text</button>
    </div>
    <hr />
    <div className="contaoine my-2r" style={{color: props.mode==="dark"?'white':'black'}}>
        <h2>Your text summary</h2>
        {/* <p>{text.length>0?text.split(" ").length-1:"0"} words and {text.length} characters</p> */}
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
