import React from 'react'
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'

export default function Map() {
     return (

          <MapContainer center={[51.505, -0.09]} zoom={20} scrollWheelZoom={true}>
               <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               <Marker position={[51.505, -0.09]}> </Marker>
          </MapContainer>
     )
}
