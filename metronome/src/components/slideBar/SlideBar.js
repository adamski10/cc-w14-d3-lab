import React from 'react';
import './SlideBar.css';

const SlideBar = (props) => {
  
  function handleBpmChange(event) {
    props.onBpmChange(parseInt(event.target.value))
  }

    return(
      <div className="slidebar">
          <input 
          type="range" 
          id="bpm" 
          name="bpm" 
          value={props.bpm} 
          min="40" 
          max="218"
          onChange={handleBpmChange}/>
      </div>
    )
  
  }
  


export default SlideBar;