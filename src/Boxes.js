import React from 'react';
import Box from './Box';

export default class Boxes extends React.Component{
    constructor(props){
        super(props);
        this.state={boxes:0};
        this.setBoxes=this.setBoxes.bind(this)
        // this.createBoxes=this.createBoxes.bind(this);
        // this.getColors=this.getColors.bind(this);
    }

    getColors(){
        return {r:Math.floor(Math.random()*256), 
                g:Math.floor(Math.random()*256), 
                b:Math.floor(Math.random()*256), 
                a:Math.random()};
    }
    setBoxes(event){
       const boxes=+event.target.value;
       this.setState({boxes})
    }

    render() {     
        return (
                <div>
                    <h1>Boxes</h1>
                    <input type="text" onChange={this.setBoxes}/>
                    <div>
                        {
                             Array(this.state.boxes).fill().map(() => {
                            return <Box colors={this.getColors} />;
                            })
                        }
                    </div>
                </div>
        )
    }
}