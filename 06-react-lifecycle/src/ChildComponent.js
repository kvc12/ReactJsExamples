import React from "react"

class ChildComponent extends React.Component {

    constructor(props) {
        console.log('ChildComponent constructor');
        super(props);
        //state is going to hold object
        this.state = {
            count: 0
        }

    }
    render() {
        console.log('Child Component render');
        return (
            <div className="badge badge-primary">
                <button className="btn btn-success mr-4" onClick={
                    () => {
                        this.setState({ count: this.state.count + 1 })
                    }
                }>+</button>
                <label className="mr-4">{this.state.count}</label>

                <button className="btn btn-success" onClick={
                    () => {
                        if (this.state.count > 0)
                            this.setState({ count: this.state.count - 1 })
                    }
                }>-</button>

            </div>
        )

    }
    componentDidMount() {
        console.log('Child Component componentDidMount')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        console.log(this.props, this.state);

        return false;
    }
    componentDidUpdate() {
        console.log('Child Component Update')
    }
    componentWillUnmount() {
        console.log('Child Component ComponentWillUnmount')
    }

  
    shouldComponentUpdate() {

        console.log("shouldComponentUpdate decide whether to render or not");

        return this.state.count >= 5 ? false : true;

    }
    static getDerivedStateFromProps(props, state) {

        console.log("Child Component getDerivedStateFromProps: props: " +JSON.stringify(props) +" & state: " +

            JSON.stringify(state)
             );
             return null;

    }
    
        static getDerivedStateFromProps(props, state){

            console.log(props, state)
            console.log(this.props, this.state)
        }
   getSnapshotBeforeUpdate(prevProps, prevState) {

        console.log(

            "Child Component getSnapshotBeforeUpdate: prevProps: " +

            JSON.stringify(prevProps) +

            " & prevState" +

            JSON.stringify(prevState)

        );
        return null;
    }
}
export default ChildComponent;



