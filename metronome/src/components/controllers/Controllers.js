import React from 'react';
import './Controllers.css';

const Controllers = (props) => {
  
  function increaseBpm() {
   props.onBpmIncrease();
  }

  function decreaseBpm() {
    props.onBpmDecrease();
   }
 

    return(
      <div className="controllers">
        <button className="btn" onClick={increaseBpm}>+</button>
        <button className="btn" onClick={decreaseBpm}>-</button>
    
    
      </div>
    )
  
  }
  


export default Controllers;