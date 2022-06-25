import React from 'react'
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'

export default function Map(props) {
     const [newData, setNewData] = React.useState({latitude: 69, longitude: 69});
     React.useEffect(() => {
          fetch(`https://ipwho.is/${props.newIp}`)
          .then(response => response.json())
          .then(data => setNewData(data));

     }, [props.newIp]);
     function MyComponent() {
          const map = useMap();
          map.panTo([newData.latitude, newData.longitude]);
          return null;
     }
     return (
          <MapContainer center={[30, -0.5]} zoom={10} scrollWheelZoom={true}>
               <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               <MyComponent />
               <Marker position={[newData.latitude, newData.longitude]}> </Marker>
          </MapContainer>
     )
}
