import React from 'react'
import './Date.css'


const Date = () => {
  return (
    <div className="App">
    <div className="container">
    <div className="content">
      <div className="text">Book Your Slot Now</div>
      <div className="form2">
        <div className="txt">Date & Time according to your convinence</div>
        <form action="" 
        >
          <div className="inputData">
            <input type="date" name="" id="book-date"/>
          </div>
          <div className="inputData">
            <input type="time" name="" id="book-time" />
          </div>
          <div className="book">
              <button type="submit">Book</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Date

