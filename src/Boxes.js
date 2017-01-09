import React from 'react';
import Box from './Box';

export default class Boxes extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    getColors(){
        return {r:parseInt(Math.random()*100), 
                g:parseInt(Math.random()*100), 
                b:parseInt(Math.random()*100), 
                a:Math.random()};
    }
    
    render() {     
        return (
            <div>
                <h1>Boxes</h1>
                {
                    Array(10).fill(null).map((_,i) => {
                        return <Box key={i} colors={this.getColors() } />;
                    })
                }
            </div>
        )
    }
}