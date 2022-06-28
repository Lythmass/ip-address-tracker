import React from 'react'
import styled from 'styled-components'

const ToLocationStyled = styled.div`
     position: absolute;
     top: 1rem;
     left: 1rem;
`;

const LocationIconStyled = styled.img`
     width: 2rem;
     cursor: pointer;
     transition: 0.25s ease;
     &:hover {
          transform: scaleX(1.25) scaleY(1.25);
     }
     &:active {
          transform: scaleX(0.75) scaleY(0.75);
     }
`;

export default function ToLocation(props) {
     function setNewStyle() {
          props.changeStyle(true);
     }
     return (
          <ToLocationStyled onClick = {() => setNewStyle()}>
               <LocationIconStyled src = "./images/location.png"/>
          </ToLocationStyled>
     )
}
