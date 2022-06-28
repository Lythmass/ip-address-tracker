import React from 'react'
import styled from 'styled-components'

const LocationDataStyled = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     gap: 1rem;
     @media (max-width: 850px) {
          font-size: 100%;
     }
`;

const LocationDataHeaderStyled = styled.h1`
     color: #14FFEC;
     font-size: 2rem;
     font-family: 'Ubuntu Mono', monospace;
     text-transform: capitalize;
     letter-spacing: 0.3rem;
     text-align: center;
     cursor: default;
     word-wrap: break-word;
     @media (max-width: 850px) {
          font-size: 170%;
     }
`;

export default function LocationData(props) {
     const data = [
          {
               "ip": props.data.ip
          },
          {
               "continent": props.data.continent
          },
          {
               "country": props.data.country
          },
          {
               "city": props.data.city
          },
     ];
     const displayData = data.map(eachData => {
          return (
               <LocationDataHeaderStyled>
                    {Object.keys(eachData)}: {eachData[Object.keys(eachData)]}
               </LocationDataHeaderStyled>
          )
     });
     return (
          <LocationDataStyled>
               {displayData}
          </LocationDataStyled>
     )
}
