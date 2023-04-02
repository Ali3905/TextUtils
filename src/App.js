// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import { useState } from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light')
  const [alert, setALert] = useState(null);
  const darkMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#2b2a30'
      showAlert("Dark Mode has been Enabled","Success")
      document.title = "TextUtils - Dark Mode"
      // let val = 'checked'
    }else if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Dark Mode has been Disabled","Success")
      document.title = "TextUtils - Home"
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#2b2a30'
      showAlert("Dark Mode has been Enabled","Success")
      document.title = "TextUtils - Dark Mode"
    }
  }
  // const primmode = () => {
  //   if(mode === 'light'){
  //     setMode('primary')
  //     document.body.style.backgroundColor = '#2a3f7e'
  //     showAlert("Primary Mode has been Enabled","Success")
  //   }else if (mode === 'primary'){
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white'
  //     showAlert("Primary Mode has been Disabled","Success")
  //   }else{
  //     setMode('primary')
  //     document.body.style.backgroundColor = '#2a3f7e'
  //     showAlert("Primary Mode has been Enabled","Success")
  //   }
  // }
  // const succmode = () => {
  //   if(mode === 'light'){
  //     setMode('success')
  //     document.body.style.backgroundColor = 'rgb(25 68 50)'
  //     showAlert("Success Mode has been Enabled","Success")
  //   }else if (mode === 'success'){
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white'
  //     showAlert("Success Mode has been Disabled","Success")
  //   }else{
  //     setMode('success')
  //     document.body.style.backgroundColor = 'rgb(25 68 50)'
  //     showAlert("Success Mode has been Enabled","Success")
  //   }
  // }
  // const warnmode = () => {
  //   if(mode === 'light'){
  //     setMode('warning')
  //     document.body.style.backgroundColor = 'rgb(166 147 0)'
  //     showAlert("Warn Mode has been Enabled","Success")
  //   }else if (mode === 'warning'){
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white'
  //     showAlert("Warn Mode has been Disabled","Success")
  //   }else{
  //     setMode('warning')
  //     document.body.style.backgroundColor = 'rgb(166 147 0)'
  //     showAlert("Success Mode has been Enabled","Success")
  //   }
  // }
  const showAlert = (message, type) => {
    setALert({
      msg : message,
      type : type,
    }) 
    setTimeout(() => {
      setALert(null)
    }, 1900);
  }

  return (    <>
    <Router >
    <Nav Mode = {mode} darkMode = {darkMode} />
    <Alert alert = {alert}/>
    <div className='container'>
    <Routes>
          <Route exact path="/" element = {<TextForm  Mode = {mode}/> }/>
        </Routes>
    </div>
     </Router> 
    </>)
}

export default App;
