import { render } from '@testing-library/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react';
import './App.css'

const position = [51.505, -0.09]
class App extends React.Component {
constructor(props){
  super(props);
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
      </MapContainer>
      </div>
      );
    }
  }


export default App;
