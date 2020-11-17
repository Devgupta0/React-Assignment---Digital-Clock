import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            time : new Date(),
        };
        this.intervalId = null;
    } 
    
    
    getTimeString(){
        const currTime = this.state.time;
        const pad = (x) => x.toString().padStart(2,"0");
        const [hours,minutes,seconds] = [currTime.getHours(),currTime.getMinutes(),currTime.getSeconds()];
        const amORPm = hours >= 12?"PM":"AM";
        const twelveHourFormat = hours>12 ? hours-12:hours;
        
        let timeString = `${pad(twelveHourFormat)}:${pad(minutes)}:{pad(seconds)}${amORPm}`;
        return timeString;
    }
    componentDidMount(){
            this.intervalId = setInterval(() =>{
                this.setState({
                    time: new Date()
                })
            },1*1000);

        }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    render() {

        return(
            <div className="Clock">
               <h3 id="time">{this.getTimeString()}</h3>
            </div>
        );
    }
}


export default App;
