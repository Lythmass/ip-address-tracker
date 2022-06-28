import React from 'react'
import styled from 'styled-components'
import LocationButton from './LocationButton.js'
import LocationData from './LocationData.js'

const LocationSectionStyled = styled.section`
     background-image: linear-gradient(45deg, transparent 95%, #14FFEC 10%),
                  linear-gradient(-135deg, #1c2e4a 90%, #14FFEC 10%);
     width: 40%;
     height: 100vh;
     transform: ${props => props.newStyle ? "translateX(0)" : "translateX(-100%)"};
     transition: 0.5s ease;
     position: absolute;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     gap: 5rem;
     @media (max-width: 850px) {
          width: 100%;
          height: 40vh;
          gap: 3vw;
     }
`;

export default function LocationSection(props) {
     const [newData, setNewData] = React.useState({});

     React.useEffect(() => {
          fetch(`https://ipwho.is/${props.newIp}`)
          .then(response => response.json())
          .then(data => setNewData(data));
     }, [props.newIp]);

     return (
          <LocationSectionStyled newStyle = {props.newStyle}>
               <LocationData data = {newData}/> { /* Data Displayed */ }
               <LocationButton changeStyle = {props.changeStyle}/> { /* To Home Button */ }
          </LocationSectionStyled>
     )
}
