import React from 'react'
import { connect } from 'react-redux'
import { buyMobile  } from "../redux/mobile/MobileAction";

 const MobileShop = (props) => {
    return (
        <div>
            <h2>Mobile Shop - {props.quantity}</h2>
            <button className="btn btn-primary" onClick={props.buyMobile}>Buy Mobile</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(`mapStateToProps ${JSON.stringify(state)}`)
    return{
        quantity: state.quantity
    }

}

const mapDispatchToProps = (dispatch)=>{
    console.log(`mapStateToProps`)

    return {
       buyMobile: () => dispatch(buyMobile())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileShop)
