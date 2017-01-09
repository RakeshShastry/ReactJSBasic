import React from 'react';
import './timer.css';

export default class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state={counter:0};
        this.go=this.go.bind(this);
        this.stop=this.stop.bind(this);
    }
    go(){
        const start = this.num.value;
        this.setState({counter:start})
        const timer = setInterval(() => {
        const counter = this.state.counter - 1;
            if(counter == 0) {
                clearInterval(timer);
            };
            this.setState({counter:counter});
        },1000);
    }
    stop(){
        clearInterval(this.go.counter);
    }
    render(){
        return (
            <div className="timerCounter">
              <h1>Timer</h1>
              <div>
                <input ref={node => this.num=node}type="text" />
                <button className="goButton" onClick={this.go}>Go!</button>
                <button className="goButton" onClick={this.stop}>Stop!</button>
              </div>
              <div>
                <h2>{this.state.counter}</h2>
              </div>
            </div>
        )
    }
}