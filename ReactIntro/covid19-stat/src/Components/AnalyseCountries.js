import { MapContainer, TileLayer, Marker, Popup,useMapEvents } from 'react-leaflet'
import React from 'react';

class Countries extends React.Component{

    constructor(props){
        super(props);
        this.state = {initialData: [], countryInfo: []};
    }

    componentDidMount(){
        this.setState({initialData: this.props.countries})
    }

    render(){
        console.log(this.state.initialData);
        return(
            <div>

            </div>
        )
    }
}

export default Countries;