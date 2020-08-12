import React, { Component } from 'react';
import './MetronomeContainer.css';
import Controllers from '../components/controllers/Controllers.js';
import SlideBar from '../components/slideBar/SlideBar.js';
import PlayPause from '../components/playPause/PlayPause.js';

class metronomeContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
          bpm: 100
      }

      this.handleBpmChange = this.handleBpmChange.bind(this);
      this.increaseBpm = this.increaseBpm.bind(this);
      this.decreaseBpm = this.decreaseBpm.bind(this);
  }


  handleBpmChange(value) {
    this.setState({ bpm: value });
  } 

  increaseBpm() {
    if (this.state.bpm < 218) {
        let newBpm = this.state.bpm + 1
        this.setState({ bpm: newBpm });
    }
    
  } 

  decreaseBpm() {
    if (this.state.bpm > 40) {
        let newBpm = this.state.bpm - 1
        this.setState({ bpm: newBpm });
    }
    
  } 


  render() {
      return (
          <div className="metronome-container">
            {this.state.bpm} Bpm
            <SlideBar bpm={this.state.bpm} onBpmChange={this.handleBpmChange} />
            <Controllers 
            onBpmIncrease={this.increaseBpm}
            onBpmDecrease={this.decreaseBpm}/>
            <PlayPause bpm={this.state.bpm}/>
          </div>
      )
  }
 
}


export default metronomeContainer;