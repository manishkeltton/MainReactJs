import { BUY_CAKE } from './cakeTypes'

const initialState = {
    numOfCakes: 10
}

console.log("cake reducer......");

const cakeReducer = (state = initialState, action) => {
      switch(action.type){
          case BUY_CAKE: 
          console.log("cake reducer inner......");

          return {
              ...state, numOfCakes:state.numOfCakes - action.payload
          }
          default: return state
      }
}

export default cakeReducer