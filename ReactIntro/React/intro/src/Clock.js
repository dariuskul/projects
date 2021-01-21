
// This component is from tutorial about props and lifecycle methods.
import React from 'react'
class Clock extends React.Component {

    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }

// After component is mounted into the dom, this method is called.
componentDidMount(){
    this.timerId = setInterval(() => this.tick(),1000);
}

componentWillUnmount(){
clearInterval(this.timerId);
}

tick(){
    this.setState({date: new Date()});
}

    render(){
        return(
            <div>
                <h1>It is {this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Clock;