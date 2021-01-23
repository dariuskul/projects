import React from 'react';
import MarkerAnalysis from './Marker'
class Markers extends React.Component{
    constructor(props){
        super(props);
        this.state = {countries: this.props.countries}
    }


    render(){
        let countries = this.state.countries;
        if(countries.length > 0){
        return(
            <div>
                {countries.map((x)=>{
                   return <MarkerAnalysis country={x}/>
                })}

            </div>
        )
    }
}
}

export default Markers;