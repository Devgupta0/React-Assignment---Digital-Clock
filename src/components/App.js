import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };
        this.intervalId = null;
    }
    render() {
        return (
            <div className="Clock">
                <h3 id="time">{this.getTimeString()}</h3>
            </div>
        );
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        },1*1000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    getTimeString(){
        const timeString = this.state.time;
        return timeString;
    }
//     padNumber(num){
//         return num<10?"0"+num:num.toString();
//     }
}


export default App;
