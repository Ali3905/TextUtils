import React from 'react'
// import {useState} from 'react'
// import { Link } from 'react-router-dom'

export default function Nav(props) {
    // const [mode, setMode] = useState('light')
// let Mode = mode
// const darkMode = () => {
//   if(mode === 'light'){
//     setMode('dark')
//   }else{
//     setMode('light')
//   }
// }
const btn = {
    height : '30px',
    width : '30px',
  }
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.Mode}`} style={{color: props.Mode==='dark'?'white':'black'}}>
  <div className="container-fluid" >
    <a id="select" className="navbar-brand" href="#" style={{color: props.Mode==='dark'?'white':'black'}}>TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item" >
          <a className="nav-link active" aria-current="page" href="#" style={{color: props.Mode==='dark'?'white':'black'}}>Home</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/about" style={{color: props.Mode==='dark'?'white':'black'}}>About</Link> */}
        </li>
      
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <button type="button" className="btn btn-primary mx-1" onClick={props.primmode} style={btn}></button>
      <button type="button" className="btn btn-success mx-3" onClick={props.succmode} style={btn}></button>
      <button type="button" className="btn btn-warning mx-1" onClick={props.warnmode} style={btn}></button>
      <div className="form-check form-switch">
        <label htmlFor="accept" id="accept">

        <input className="form-check-input" onClick={props.darkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        </label>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
  </nav>
  )
}
