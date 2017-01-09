import React from 'react';
import Box from './Box';

export default class Boxes extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    
    render() {
        return (
            <div>
                <h1>Boxes</h1>
                <Box />
            </div>
        )
    }
}