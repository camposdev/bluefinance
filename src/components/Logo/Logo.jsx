import React from "react";
import styled from "styled-components";

const LogoComponent = styled.h2`
  margin: 0;
  font-weight: 300;
  font-size: 6rem;
  color: white;
  letter-spacing: -3px;

  small {
    font-size: 0.7em;
    font-style: italic;
    text-transform: lowercase;
  }
`;

const Logo = () => (
  <LogoComponent>Blue<small>Finance</small></LogoComponent>
);

export default Logo;