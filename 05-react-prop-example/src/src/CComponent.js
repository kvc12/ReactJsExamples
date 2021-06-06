import React from 'react'
class CComponent extends React.Component{
    // constructor(){
    //     this.
    // }

    render(props){
        return(
            <button onClick = {this.props.referenceMethod}>+1</button>
        );
    }
}

export default CComponent;