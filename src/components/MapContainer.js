import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = ({lat, lng}) => {

  const mapStyles = {        
    height: "150px",
    width: "150px"};
  
  const defaultCenter = {
    lat: Number(lat), lng: Number(lng)
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyCU_9ROK2NYa6gv94IY2wkuBQ_Px-MQuhU'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;