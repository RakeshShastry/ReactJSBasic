import React from 'react';
import './counter.css'

export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={count:0};
        this.inc=this.inc.bind(this);
        this.dec=this.dec.bind(this);
        this.clear=this.clear.bind(this);
    }
    inc(){
        let count=this.state.count + 1;
        this.setState({count});
        
    }
    dec(){
        if(this.state.count<=0) return;
        let count=this.state.count - 1;
        this.setState({count});
    }
    clear(){
        let count=(this.state.count>0?0:this.state.count);
        this.setState({count});
    }
    render(){
        return (
            <div className="counter">
              <h1>Counter</h1>
              <div>{this.state.count}</div>
              <button onClick={this.inc}>Increment(++)</button><br/>
              <button onClick={this.dec}>Decrement(--)</button><br/>
               <button onClick={this.clear}>Clear</button>
            </div>
        )
    }
} 
