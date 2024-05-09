import React from 'react'

import './style.css'
import pdf from './pdf.png' 

const Upload = () => {
   

  return (
    <div className='App'>
   
    <label for="images" class="drop-container" id="dropcontainer">
    <img className='img1' src={pdf} alt="" srcset="" />
     <span class="drop-title">Drop files here</span>
   <span className='or'> or </span> 
   <input type='file'
       
    />
    </label>
    <br></br><br></br>
    <button class="button-89" role="button">Upload Image</button>
      
    </div>
  )
}

export default Upload
