import React from 'react'
import styled from 'styled-components'
import SearchTitle from './SearchTitle.js'
import SearchInput from './SearchInput.js'
import SearchButton from './SearchButton.js'

const SearchSectionStyled = styled.section`
     display: flex;
     background-image: linear-gradient(45deg, transparent 95%, #14FFEC 10%),
                       linear-gradient(-135deg, #1c2e4a 90%, #14FFEC 10%);
     height: 100vh;
     text-align: center;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     gap: 2rem;
     width: 40%;
     @media (max-width: 850px) {
          width: 100%;
          height: 40vh;
     }
`
export default function SearchSection(props) {
     return (
          <SearchSectionStyled>
               <SearchTitle /> { /* h1 tag */ }
               <SearchInput searchIp = {props.searchIp} /> { /* Input tag */}
          </SearchSectionStyled>
     );
}
