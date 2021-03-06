import React from 'react';
import styled from "styled-components";

const TitleComponent = styled.h2`
  font-size: ${({ large }) => large ? '3rem' : '2rem'};
  font-weight: 300;
  text-align: center;
  margin: 0 0 50px;
  background: var(--gradient-light);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.7;

  @media (min-width: 768px) {
    font-size: ${({ large }) => large ? '3rem' : '2rem'};
  }
`;

const Title = ({ children, ...props }) => <TitleComponent {...props}>{children}</TitleComponent>

export default Title;