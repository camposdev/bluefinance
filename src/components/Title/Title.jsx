import React from 'react';
import styled from "styled-components";

const TitleComponent = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  margin: 0 0 50px;
  background: var(--gradient-light);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.7;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = ({ children }) => <TitleComponent>{children}</TitleComponent>

export default Title;