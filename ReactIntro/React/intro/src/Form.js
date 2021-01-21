import React from 'react'


export default class Form extends React.Component{

    constructor(props){
        super(props);

        this.state = {formValue: ''};
    }

    handleOnChange = (e) =>{
        this.setState({formValue: e.target.value})
        console.log(this.state.formValue);
    }

    handleSubmit = (e) =>{
        console.log(`Was submitted: ${this.state.formValue}`)
        e.preventDefault();
    }

    render(){
        return( 
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="name" value={this.state.formValue} onChange={this.handleOnChange}></input>
                    <input type="submit" value="Submit"></input>
                </form>
        );
    }
    
}
