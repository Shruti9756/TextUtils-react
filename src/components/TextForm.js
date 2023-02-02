import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked : "+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLowClick=()=>{
        // console.log("Uppercase was clicked : "+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick=()=>{
        
        let newText="";
        setText(newText);
    }
    const handleExtraSpaces=()=>{
        
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!!","success");
    }
    const handleCopy=()=>{
      var text= document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard!","success");
    }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

 

    const [text,setText]=useState('');
    // text="new text";// wrong way to change the state 
    // setText=("new text"); // correct way to change the state
  return (
    <>
  
    <div className="container" style={{color:props.mode==='dark'? 'white':'black'}}>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        
        <textarea
          className="form-control"
          id="myBox"
          rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? 'grey':'white',color:props.mode==='dark'? 'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2"  onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2"  onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2"  onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2"  onClick={handleExtraSpaces}>Remove Extra spaces</button>

      

    </div>
    <div className="container my-2" style={{color:props.mode==='dark'? 'white':'black'}}>
      <h3>Your text summary</h3>
      <p> {text.split(" ").length} words  and {text.length} characters</p>
      <p> {0.008* text.split(" ").length} Minutes read</p>
      <h4>Preview</h4>
      <p>{text.length>0?text:"Enter something in textbox above to preview it here..."}</p>
    </div>

    </>
  );
}
