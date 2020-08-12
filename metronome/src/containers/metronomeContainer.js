import React, { Component } from 'react';
import controllers from '../components/controllers.js';
import slideBar from '../components/slideBar.js';

class metronomeContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
          bpm: 100
      }
  }

  render() {
      return (
          <div className="metronome-container">
              <slideBar />
              <controllers />
          </div>
      )
  }
 
}


export default metronomeContainer;