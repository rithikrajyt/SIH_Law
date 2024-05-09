import React from 'react'
import './style.css'
import pdf from './pdf.png' 

const Upload = () => {
   

  return (
  <div className='App' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", opacity: 0.7 }}>
    <label for="images" class="drop-container" id="dropcontainer">
    <img className='img1' src={pdf} alt="" srcset="" />
     <span class="drop-title">Drop files here</span>
   <span className='or'> or </span> 
   <input type='file' accept=".pdf"/>
    </label>
    </div>
  )
}

export default Upload
