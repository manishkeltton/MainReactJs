import React  from 'react'

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
      class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        
        incrementCount = () =>{
            // this.setState({count: this.state.count+1})
            this.setState(prevState => {
                return { count: prevState.count+incrementNumber }
            })
        }
           render(){
               console.log(this.props.name)
               return <OriginalComponent 
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    {...this.props}
                    />
           }
      }
      return NewComponent
}

export default UpdatedComponent;