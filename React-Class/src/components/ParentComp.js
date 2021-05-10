import React, { Component } from 'react'
import MemoComp from './MemoComp';
import PureComp from './pureComp/PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Manish'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Manish'
            })
        }, 2000);
    }
    
    render() {
        console.log("******Parent component render*******")
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
                {/* <RegComp name={this.state.name}/>
                <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
