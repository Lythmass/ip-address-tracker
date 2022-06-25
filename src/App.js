import React from 'react'
import styled from 'styled-components'
import Map from './components/Map.js'
import SearchSection from './components/search section/SearchSection.js'

const MainStyled = styled.section`
     display: flex;
     width: 100%;

     @media (max-width: 850px) {
          flex-direction: column;
     }
`

export default function App() {
     const [ip, setIp] = React.useState("");

     return (
          <MainStyled>
          <SearchSection searchIp = {setIp}/>
               <Map newIp = {ip} />
          </MainStyled>
     );
}
