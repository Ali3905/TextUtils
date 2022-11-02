import React, {useState} from 'react'

export default function TextForm(props) {
    let [text, setText] = useState('');
    const preview = document.getElementById("preview")
    const show1 = document.getElementById("show")
    const hide1 = document.getElementById("hide")
    const handleupClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleloClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }
    const handleChange = (event) => {
        setText(event.target.value)
    }
    const show = () => {
        preview.style.display = 'block'
        show1.style.display = 'none'
        hide1.style.display = 'inline'
    }
    const hide = () => {
        preview.style.display = 'none'
        hide1.style.display = 'none'
        show1.style.display = 'inline'
    }
    const handleClearClick = () => {
        let newText = ''
        setText(newText)
    }
    const display = {
        display : "none",
        color: props.Mode==='dark'?'white':'black'
    }
    
    
    // if (Mode === 'daek') {
        
    // }
  return (
      <div>
        <div className="mb-3">
            <h1 style={{color: props.Mode==='dark'?'white':'black'}}>Enter text below to Analyze</h1>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange = {handleChange}
            style={{color: props.Mode==='dark'?'white':'black',backgroundColor: props.Mode==='dark'?'grey':'white'}}></textarea>
        </div>
            <button type="button" className="btn btn-primary" onClick={handleupClick}>Convert to upperCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleloClick}>Convert to lowerCase</button>
            <button type="button" className="btn btn-primary mx-2" id = "show"onClick={show}>Show Preview</button>
            <button type="button" className="btn btn-primary mx-2" id = "hide"onClick={hide} style= {{display:'none', color:"white"}} >Hide Preview</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <div style={{color: props.Mode==='dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            {text.split(" ").length} Words and {text.length} Characters
        </div>
        <div id = "preview" style= {display } >
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}
