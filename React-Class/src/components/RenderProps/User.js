import React, { Component } from 'react'

class User extends Component {
    render() {
        const { render } = this.props
        return (
            <div>
                {/* {this.props.name} */}
                { render(false) }
            </div>
        )
    }
}

export default User
