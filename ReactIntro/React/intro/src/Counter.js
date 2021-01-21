import React from 'react'
// Handling events
class Counter extends React.Component{
    constructor(props){
        super(props);

        this.state = {counter: 0};
    }

    handleClick = (e,num) => {
        e.preventDefault();
        if(num === 1){
        this.setState({counter: this.state.counter + 1});
        }else{
            this.setState({counter: this.state.counter - 1});
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={(e) => this.handleClick(e, 1)}>Increment counter</button>
                <button onClick={(e) => this.handleClick(e, 2)} >Dicrement counter</button>
            </div>
        );
    }
}

export default Counter;