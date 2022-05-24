import React, { useState } from "react";
// import {useSpeechSynthesis} from "react-speech-kit"


export default function TextForm(props) {

  const countWord = (e)=> {
     var a = e.trim().split(" ");
     var count = 0;

     for (var i = 0; i < a.length; i++) {
       if (a[i] !== " " && a[0] !== " ") {
         console.log(a[i]);
         count++;
       }
     }
     return count;
  }

  // const { speak } = useSpeechSynthesis();
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + Text)
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to uppercase", "success");
  };

  const handleLowClick = () => {
   
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to Lowercase", "success");
  };


  const handleClearClick = () => {
   
    let newText = "";
    setText(newText);
  };


  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("I am copy");
    var t = document.getElementById("myBox");
    navigator.clipboard.writeText(t.value)
  }

  const handleExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "))

}


  const [Text, setText] = useState("");

  return (
    <>
      <div className="container" style={{ color:props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 style={{ textAlign: "center" }}>{props.heading}</h1>
        <div className="mb-3">
          <label for="myBox" className="form-label">
            Example Textarea
          </label>
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            style = {{backgroundColor: props.mode === 'dark' ?'grey' : 'white',color: props.mode === 'dark' ?'white' : 'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-info mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleClearClick}>
          Clear
        </button>
      
        <button className="btn btn-success mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>
          remove extraspaces
        </button>
      
      </div>
      <div className="container my-4">
        <h2>Your Text summary</h2>
        <p>
          {countWord(Text)} words and {Text.length} characters
        </p>
        <p>{0.008 * Text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
