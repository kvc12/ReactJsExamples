//import { useState } from "react";
function FComponent(props) {
    //const [counter, setCounter] = useState(0);
    //const handleClick = () => setCounter(counter+1);
    return (
        <div>
            <button onClick={props.onClickFunction}>
                +1
                </button>
        </div>

    )

}
function logRandom(){
    console.log(Math.random());
}


export default FComponent;