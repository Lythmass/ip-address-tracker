import React from 'react'
import styled from 'styled-components'
import Map from './components/Map.js'
import SearchSection from './components/search section/SearchSection.js'
import LocationSection from './components/location section/LocationSection.js'

const MainStyled = styled.section`
     display: flex;
     width: 100%;
     @media (max-width: 850px) {
          flex-direction: column;
     }
`

export default function App() {
     const [ip, setIp] = React.useState("");
     const [location, setLocation] = React.useState(false);
     const [success, setSuccess] = React.useState(true);

     return (
          <MainStyled>
               <SearchSection isValid = {success} searchIp = {setIp} changeStyle = {setLocation} />
               <LocationSection newStyle = {location} changeStyle = {setLocation} newIp = {ip} />
               <Map setValid = {setSuccess} newIp = {ip} />
          </MainStyled>
     );
}
