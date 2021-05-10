import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
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
        buyCake: number => dispatch(buyCake(number))
    }
}
//end step-2

//step - 3
export default connect(mapStateToProps, mapDispatchToProps) (NewCakeContainer)
