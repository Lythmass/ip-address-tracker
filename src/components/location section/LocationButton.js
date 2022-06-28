import React from 'react'
import styled from 'styled-components'

const LocationButtonStyled = styled.div`
     background-color: #14FFEC;
     padding: 1rem;
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 50%;
     cursor: pointer;

     transition: 0.25s ease;
     &:hover {
          transform: scaleX(1.25) scaleY(1.25);
     }
     &:active {
          transform: scaleX(0.75) scaleY(0.75);
     }
     @media (max-width: 850px) {
          padding: 0.75rem;
     }

`
const HomeStyled = styled.img`
     width: 2rem;
     @media (max-width: 850px) {
          width: 1rem;
     }
`
export default function LocationButton(props) {
     return (
          <LocationButtonStyled onClick = {() => props.changeStyle(false)}>
               <HomeStyled src = "./images/home.png"/>
          </LocationButtonStyled>
     )
}
