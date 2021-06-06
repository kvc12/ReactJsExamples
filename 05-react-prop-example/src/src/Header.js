function Header(){
    return(
        <div className = "jumbotron">
        <h1 className = "display-4">React States</h1>
      
      <hr/>
      <p className = "my-4">
       A state is just a javascript object which holds information of the component which can affect the output of the render function. You can manage the state within the component, and whenever you change the state, React re-renders the component.
      </p>
      </div>
      
    );
}

export default Header;