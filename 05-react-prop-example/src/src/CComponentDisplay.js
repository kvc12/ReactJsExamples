import React from 'react';

class CComponentDipslay extends React.Component{
    render(props){
        return(
            <div>{this.props.counterValue}</div>
        );
    }
}

export default CComponentDipslay;