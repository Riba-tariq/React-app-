 import React, { useState } from 'react'

export default function Textform(props) {
  
   const UpClick=()=>{
 console.log('uppercase was clicked' + Text);
let newText= Text.toUpperCase();
setText(newText);

props.showAlert("Converted to Uppercase","Success");
}
const lowClick=()=>{
  console.log('lowercase was clicked' + Text);
 let newText= Text.toLowerCase();
 setText(newText)
 props.showAlert("Converted to Lowercase","Success");
 }
 
const Uponchange=(event)=>{
    console.log('on change');
   setText(event.target.value)
}
    const [Text,setText]  = useState(' ');
   
  return (
    <>
    <div className='container' style={{color:props.mode==='#042743'? 'white':'black'}} >
    <h1 className='mb-1' >{props.heading} </h1>
<div className="mb-4">
  <textarea className="form-control" value={Text} onChange={Uponchange} style={{backgroundColor:props.mode==='#042743'? '#13466e':'white' ,color:props.mode==='#042743'? 'white':'black'}} id="myText=" rows="8"></textarea>
</div>
<button disabled={Text.length===0} className=' btn btn-primary mx-2 my-2' onClick={UpClick}>Convert to Uppercase</button>
<button disabled={Text.length===0} className=' btn btn-primary mx-2 my-2' onClick={lowClick}>Convert to LowerCase</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='#042743'? 'white':'black'}}>
<h2>Your Text Summary</h2>
<p> {Text.split(/\s+/).filter((element) => {return element.length!==0}).length}words and{Text.length}characters</p>
<p> {0.008 *Text.split(" ").filter((element) => {return element.length!==0}).length} mintues read</p>
<h3>Preview</h3>
<p>{Text.length>0? Text:"Noting to  preview here"}</p>
</div>
    </>
  )
}