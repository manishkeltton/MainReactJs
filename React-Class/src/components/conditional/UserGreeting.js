import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }

    changeLogged(){
       this.setState({isLoggedIn: true});
    }
    
    render() {

        //Short circuit operator
        return (
            <div>
                {this.state.isLoggedIn && <div>Welcom Manish</div>}
                {this.state.isLoggedIn || <div>Welcom Guest</div>}
                <button onClick={this.changeLogged.bind(this)}>Click Me</button>
            </div>
        )

        //Ternary conditional operator
        // return (
        //     <div>
        //     {this.state.isLoggedIn ? 
        //     <div>welcome Manish</div> : 
        //     <div>Welcome Guest</div>}

        //     <button onClick={this.changeLogged.bind(this)}>Click Me</button></div>
        // )

        //Element Variables
        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div>welcome Manish</div>
        // } else{
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>
        

    //if/else conditional 
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <div>Welcome Manish</div>
        //         </div>
        //     ) 
        // }else{
        //     return (
        //         <div>
        //             <div>Welcome Guest</div>
        //         </div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome Manish</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
