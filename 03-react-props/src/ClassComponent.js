import React from 'react'
class ClassComponent extends React.Component {
  render () {
    return (
      <div>
        <h3>Properties in class Component</h3>
        {this.props.user}
      </div>
    );
  }
}
ClassComponent.propTypes = {
  user: PropTypes.string
};
ClassComponent.defaultTypes = {
  user: 'user'
};


export default ClassComponent;
