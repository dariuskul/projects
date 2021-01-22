import { render } from '@testing-library/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react';
import LocateUser from './Components/LocateUser'
import './App.css'
import fetchCountries from './FetchData/fetchCountries'
import Countries from './Components/AnalyseCountries'
const position = [51.505, -0.09]
class App extends React.Component {
constructor(props){
  super(props);
  this.state = {countries: [], countriesInfo: []};
}

componentDidMount(){
  let data = fetchCountries("https://disease.sh/v3/covid-19/countries");

  data.then((res) => {
    this.setState({countries: res})
  })

}
  render(){
    return (
    <div>
      <MapContainer className="map" center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            KEKW <br /> KEKW
          </Popup>
        </Marker>

        {/*LocateUser is used for locating user */}
        <LocateUser/>
        <Countries countries={this.state.countries} />
      </MapContainer>
      </div>
      );
    }
  }


export default App;
