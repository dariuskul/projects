import React from 'react'


class RandomNames extends React.Component{
    constructor(props){
        super(props);
        this.state = {names: []};
    }


    componentDidMount(){
        var myHeaders = new Headers({
            'Content-Type': 'text/plain',
            'ccess-Control-Allow-Origin': '*'
          });
        fetch('https://cors-anywhere.herokuapp.com/http://names.drycodes.com/10', {headers: myHeaders}).then(response=> response.json()).then(data=> this.setState({names: data}));
    }


    formatData(data){
        const itemList = data.map(x=> {
           <li>{x}</li>
        });

        return itemList;
    }

    render(){
        let names;
        this.state.names.length > 0 ? names = this.state.names : names = <p>Loading</p>
        return(
            <div>
                <li>{names}</li>
            </div>
        )
    }
}

export default RandomNames;