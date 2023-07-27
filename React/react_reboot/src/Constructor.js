import React from 'react';
class Greet extends React.Component{
    constructor(){
        super();
        this.state={age:"29"};

    }
    render(){
        return(<>
        <h1> Hello Guys</h1>
        <h1>your age={this.state.age}</h1>
        
    </>
    )
    }
}
export default Greet;