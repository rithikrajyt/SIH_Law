import React from 'react'
import { useState,useEffect } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage';
import {v4} from 'uuid';
import './style.css'
import pdf from './pdf.png' 

const Upload = () => {
    const [imageUpload,setImageUpload] = useState(null);

    const uploadImage = () => {
        if(imageUpload==null) return;
        const imageRef = ref(storage,`images/${imageUpload.name + v4()}`); 
        uploadBytes(imageRef, imageUpload).then(()=> {
            alert("File uploaded")
        })
    };

    useEffect(() => {

    }, [])

  return (
    <div className='App'>
    {/* <label for="images" class="drop-container" id="dropcontainer">
    <span class="drop-title">Drop files here</span>
    </label> 
    <input type='file'
        onChange={(event) => {
            setImageUpload(event.target.files[0]);
        }}
    /> */}
    <label for="images" class="drop-container" id="dropcontainer">
    <img className='img1' src={pdf} alt="" srcset="" />
     <span class="drop-title">Drop files here</span>
   <span className='or'> or </span> 
   <input type='file'
        onChange={(event) => {
            setImageUpload(event.target.files[0]);
        }}
    />
    </label>
    <br></br><br></br>
    <button class="button-89" role="button" onClick={uploadImage}>Upload Image</button>
      
    </div>
  )
}

export default Upload
