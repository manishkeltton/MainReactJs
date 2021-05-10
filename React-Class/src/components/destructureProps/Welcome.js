import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        //Destructuring props
        const { name, heroName } = this.props;
        //const {state1, state2} = this.state
        return (
            <h1>
                Welcome Component {name} a.k.a {heroName}
            </h1>
        )
    }
}

export default Welcome;