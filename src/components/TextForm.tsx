import React, {useState} from 'react'
interface TextFormsProps{
  heading?:string
  mode:string
  showAlert: (message: string, type: string) => void;
}

const TextForm : React.FC<TextFormsProps>=(props) => {

  const [text, setText] = useState('');
  const [textToCopy, setTextToCopy] = useState();
 
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

    const handlestopclicked=()=>
{
    //console.log("StopListen Text was clicked"+ text);
    window.speechSynthesis.cancel()
}
const handleExtraSpaces = ()=>{
  let words = text.split(' ');
  let joinedWords = '';
  // console.log(words);
  words.forEach((elem)=>{
      if(elem[0] != undefined){
          joinedWords += elem + " ";
          console.log(joinedWords);
      }
  })
  setText(joinedWords);
}
const reverseText = () => { //hello
  let splitText = text.split(""); //['h', 'e', 'l', 'l', 'o']
  let reverseingText = splitText.reverse(); //['o', 'l', 'l', 'e', 'h']
  let joinText = reverseingText.join(""); //olleh
  setText(joinText);
}


const handleCopyToClipboard = () => {
  navigator.clipboard.writeText(text);
};

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
<button type="button" className="btn btn-primary m-2" onClick={handlestopclicked}>Stop Listening </button>
<button className="btn btn-success mx-2" onClick={handlePasteText}>Paste Text</button>
<button className="btn btn-success mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
<button className="btn btn-success mx-2" onClick={reverseText}> Reverse Text</button>
  
<button className="btn btn-success mx-2" onClick={handleCopyToClipboard}>
  Copy to Clipboard
</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
  )
}
export default TextForm;