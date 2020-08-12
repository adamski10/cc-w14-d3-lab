import React, { Component } from 'react';
import './PlayPause.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import clack from '../../clack.wav';


class PlayPause extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            interval: null
        }

        this.playPause = this.playPause.bind(this);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.bpm !== prevProps.bpm && this.state.playing === true) {
            this.pause();
            this.play();
        }
    }

    play() {
        let timmer = (1000 * 60) / this.props.bpm;

        let interval = setInterval(() => {
            const sound = new Audio(clack);
            sound.play()
        }, timmer);

        this.setState({
            playing: true,
            interval: interval
        });
    }

    pause() {
        clearInterval(this.state.interval);
            this.setState({
                playing: false,
                interval: null
            });
    }

    playPause() {
        if (this.state.playing == false) {
            this.play();

        } else {
            this.pause();
        }

    }

    render() {
        return (
            <div className="play-container">
                <button className="play-pause" onClick={this.playPause}>{this.state.playing ? 'Stop' : 'Play'}</button>
            </div>
        )
    }

}

export default PlayPause;


