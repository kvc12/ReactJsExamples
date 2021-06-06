import React, { Component } from "react";
class RefDemo extends Component {
  constructor() {
    super();
    this.studtudeIdRef = React.createRef();
    this.studentNameRef = React.createRef();
  }
  componentDidMount() {
    this.studtudeIdRef.current.focus();
  }
  clickHander = () => {
    alert(
      "Id: " +
        this.studtudeIdRef.current.value +
        "& Name: " +
        this.studentNameRef.current.value
    );
  };
  render() {
    return (
      <div>
        <input type="text" placeholder="Student Id" ref={this.studtudeIdRef} />
        <input
          type="text"
          placeholder="Student Name"
          ref={this.studentNameRef}
        />
        <button onClick={this.clickHander}>Click</button>
      </div>
    );
  }
}
export default RefDemo;
