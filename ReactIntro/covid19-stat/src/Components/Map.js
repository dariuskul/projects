import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react';  
import Markers from './Markers'
import LocateUser from './LocateUser'
import '../App.css'
import fetchCountries from '../FetchData/fetchCountries'
class Map extends React.Component{
    constructor(props){
        super(props);
        this.state = {countries: []};
    }

    componentDidMount(){
        fetchCountries('https://disease.sh/v3/covid-19/countries').then((data) =>{
            this.setState({countries: data});
        });

    }

    render(){
        let data = this.state.countries;
        if(data.length > 0){
        return(
            <MapContainer className="map" center={[0,0]} zoom={0} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Markers countries={this.state.countries}/>

            </MapContainer>
        )
        }
        else{
            return(
                <div>
                    Loading...
                </div>
            )
        }
    }


}

export default Map;