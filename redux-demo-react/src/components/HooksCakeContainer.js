import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    console.log("HooksCakeContainer.......");
    const numOfCakes = useSelector(state => {
        console.log("state => ",state.cake);
        return state.cake.numOfCakes})
    console.log("numOfCakes => ",numOfCakes);
    const dispatch = useDispatch()
    console.log("dispatch => ",dispatch);
    return (
        <div>
            <h2>Num of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
