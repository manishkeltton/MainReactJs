import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

//Step- 1
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes    
    }
}
//end step-1

//Step-2
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
//end step-2

//step - 3
export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)
