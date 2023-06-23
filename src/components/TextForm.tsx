import React, {useState} from 'react'

interface TextFormsProps{
  heading?:string
}

const TextForm : React.FC<TextFormsProps>=(props) => {

  const [text, setText] = useState('');

    const handleupClick=() => {
        console.log("UpperCase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleloClick=() =>{
      console.log("UpperCase was clicked"+ text);
      let newText=text.toLowerCase();

      setText(newText);
  }
  const speak=() =>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
    const handleonChange=(event :React.ChangeEvent<HTMLTextAreaElement>) =>{
        console.log("Handle onchange");
        setText(event.target.value);
    }
    const handlePasteText=() =>{
      navigator.clipboard.readText().then(
        (clipText) => setText(clipText));    
    }
    
const reverseText = () => { //hello
  let splitText = text.split(""); //['h', 'e', 'l', 'l', 'o']
  let reverseingText = splitText.reverse(); //['o', 'l', 'l', 'e', 'h']
  let joinText = reverseingText.join(""); //olleh
  setText(joinText);
}

  return (
    <>
    <div>
        <h1>{props.heading}</h1>    
<div className="mb-3">

  <textarea className="form-control" value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows={8}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to upper case</button>
<button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to lower case</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
<button className="btn btn-success mx-2" onClick={handlePasteText}>Paste Text</button>
<button className="btn btn-success mx-2" onClick={reverseText}> Reverse Text</button>
{/* <button className="btn btn-primary mx-1" type="button" onClick={() => changeColor(Math.floor(Math.random() * 5))}>Change Color</button> */}

    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p> {text.split(" ").length -1} words and {text.length} characters</p>
      <p> {0.08 *text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
export default TextForm;