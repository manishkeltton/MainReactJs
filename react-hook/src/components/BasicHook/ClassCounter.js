import React, { Component } from 'react'

class ClassCounter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return ({
    //             count: prevState.count +1
    //         })
    //     })
    // }

    incrementCount = () => {
        this.setState({count:this.state.count+1})
    }
    
    render() {
        const { count } = this.state
        return (
            <div>
                <h2>Class Counter</h2>
                <button onClick={this.incrementCount}>Count {count} times</button>
            </div>
        )
    }
}

export default ClassCounter
