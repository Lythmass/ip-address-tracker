import React from 'react'
import styled from 'styled-components'

const SearchButtonStyled = styled.div`
     background-color: #14FFEC;
     border-raius: 10px;
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
`

const ArrowStyled = styled.img`
     transform: translateX(2.5px);
`

export default function SearchButton(props) {
     function sendIp(ipValue) {
          props.searchIp(ipValue);
     }
     return (
          <SearchButtonStyled onClick = {() => sendIp(props.ipValue)}>
               <ArrowStyled src = "./images/arrow.png"/>
          </SearchButtonStyled>
     )
}
