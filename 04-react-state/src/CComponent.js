import React from 'react';
class CComponent extends React.Component{
    
    constructor(props){
        //initialize state
        super();
        this.state={
            count : 0  
        }
    }
    render(){
        return(
        <div>
            <h3>Manage <b>state</b> in Class Component</h3>
            <button className="btn btn-success mr-2" onClick={()=>{
                this.setState({count: this.state.count+ 1});  //modify the state
                }}> 
                + 
            </button>

            <button className="btn btn-outline-primary mr-2">{this.state.count}</button>
            
            <button className="btn btn-success" onClick={()=>{
                this.setState({count: this.state.count- 1});  //modify the state
                }}> 
                -
            </button>
       </div>
        );
    }
}

export default CComponent;