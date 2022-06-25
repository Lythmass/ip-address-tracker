import React from 'react'
import styled from 'styled-components'

const SearchInputStyled = styled.input`
     width: 80%;
     height: 3rem;
     border-radius: 10px;
     font-family: 'Roboto', sans-serif;
     font-size: 1.3rem;
     border: none;
     padding: 1rem;
     color: #1c2e4a;
     text-align: center;
     &:focus, &:active {
          outline: none;
     }
     @media (max-width: 850px) {
          width: 60%;
     }
`

export default function SearchInput() {
     return (
          <SearchInputStyled />
     );
}
