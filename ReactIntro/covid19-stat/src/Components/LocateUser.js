import { MapContainer, TileLayer, Marker, Popup,useMapEvents } from 'react-leaflet'
import {React,useState} from 'react';

function LocateUser() {
  const [position, setPosition] = useState(null)
  
  const map = useMapEvents({
    load() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.setView(e.latlng)
    },
  })

  return null;
  
}

export default LocateUser;