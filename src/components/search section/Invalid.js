import React from 'react'
import styled from 'styled-components'

const InvalidStyled = styled.h1`
     color: #E84545;
     font-size: 1.5rem;
     font-family: 'Ubuntu Mono', monospace;
     letter-spacing: 0.1rem;
     cursor: default;
     @media (max-width: 850px) {
          font-size: 110%;
     }
`;

export default function Invalid() {
     return (
          <InvalidStyled>
               Invalid IP Address
          </InvalidStyled>
     )
}
