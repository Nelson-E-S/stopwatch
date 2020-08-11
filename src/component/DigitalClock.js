import React, { Component } from 'react';
import DigitalNumber from './DigitalNumber';

class DigitalClock extends Component{
    constructor(){
        super();
        this.state = {
            hours:0,
            minutes:0,
            seconds:0,
            milliseconds:0,
            timer:null
        }
    }
    updateHours = () =>{
        let hr = this.state.hours + 1;
        this.setState(
            {hours: hr}
        );
    }
    updateMinutes = () =>{
        let mn = this.state.minutes + 1;
        this.setState(
            {minutes: mn}
        );
    }
    updateSeconds = () =>{
        let sd = this.state.seconds + 1;
        this.setState(
            {seconds: sd}
        );
    }
    updateMilliseconds = () =>{
        let ml = this.state.milliseconds + 1;
        this.setState(
            {milliseconds: ml}
        );
    }
    startClock = () =>{
        this.setState(
            {timer:setInterval(()=>this.updateClock(),1)}
        );
    }
    pauseClock = () =>{
        clearInterval(this.state.timer);
    }
    resetClock = () =>{
        this.pauseClock();
        this.setState(
            {
                hours: 0,
                minutes: 0,
                seconds: 0,
                milliseconds:0
            }
        )
    }
    updateClock = () =>{
        this.updateMilliseconds();
        if (this.state.milliseconds === 1000){
            this.setState(
                {milliseconds:0}
            )
            this.updateSeconds();
        }
        if (this.state.seconds === 60){
            this.setState(
                {seconds:0}
            )
            this.updateMinutes();
        }
        if (this.state.minutes === 60){
            this.setState(
                {minutes:0}
            )
            this.updateHours();
        }
    }
    render(){
        const clockStyle = {
            display: 'flex',
            'flex-flow': 'row nowrap',
          };
        return(
            <div className="ClockWall">
                <div className="stopWatch" style={clockStyle}>
                    <DigitalNumber number={this.state.hours} /><span>:</span>
                    <DigitalNumber number={this.state.minutes} /><span>:</span>
                    <DigitalNumber number={this.state.seconds} /><span>:</span>
                    <DigitalNumber number={this.state.milliseconds} milli={true} />
                </div>
                <div className="controls">
                    <button onClick={this.startClock}>></button>
                    <button onClick={this.pauseClock}>||</button>
                    <button onClick={this.resetClock}>[]</button>
                </div>
            </div>
        );
    }
}

export default DigitalClock;

//dont make this harder than it needs
