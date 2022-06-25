import React from 'react'
import styled from 'styled-components'

const SearchTitleStyled = styled.h1`
     color: #14FFEC;
     font-size: 3rem;
     font-family: 'Ubuntu Mono', monospace;
     text-transform: uppercase;
     letter-spacing: 0.3rem;
     cursor: default;
     @media (max-width: 850px) {
          font-size: 200%;
     }
`

export default function SearchTitle(props) {
     return (
          <SearchTitleStyled>Enter IP Address</SearchTitleStyled>
     );
}
