import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();//1st step for create Refs 
        this.cbRef = null;
        this.setCbRef = element => {  //This is second way
            this.cbRef = element;
        }
    }
    
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus();
        }
        // this.inputRef.current.focus();
        // console.log(this.inputRef);
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
