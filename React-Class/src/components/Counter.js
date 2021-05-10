import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
         this.state = {
             count: 0
         }
    }
    //***React may group multiple set state calls into a single upadate for better perfomance */
    incVal(){
        // this.state.count = this.state.count + 1;
        // console.log(this.state.count);
        // this.setState(
        //     {
        //         count: this.state.count+1 here increase by only one 
        //     },
        //     () => {
        //         console.log('Callback value', this.state.count)
        //     }  
        // );
        this.setState((prevState, props) => ({
            count: prevState.count + 1 //add count + 5 and prevState are use for calculate for new state
        }))
        console.log(this.state.count);
    }

    incrementFive() {
        this.incVal();
        this.incVal();
        this.incVal();
        this.incVal();
        this.incVal();
    }

    render() {
        return (
            <div>
                <h1>counting {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>add</button>
            </div>
        )
    }
}

export default Counter
