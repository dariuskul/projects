import { render } from '@testing-library/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react';
import './App.css'
import fetchCountries from './FetchData/fetchCountries'
import Countries from './Components/AnalyseCountries'
import Map from './Components/Map'
class App extends React.Component {


  render(){
    return (
    <div>
      <Map/>
      </div>
      );
    }
  }


export default App;
