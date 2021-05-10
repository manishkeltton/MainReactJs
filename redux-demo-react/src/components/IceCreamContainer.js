import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of IceCream - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

//Step- 1
const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams    
    }
}
//end step-1

//Step-2
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}
//end step-2

//step - 3
export default connect(mapStateToProps, mapDispatchToProps) (IceCreamContainer)
