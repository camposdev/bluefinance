import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const LogoComponent = styled.h2`
  margin: 0;
  font-weight: 300;
  font-size: ${({ small }) => small ? `5rem` : `6rem`};
  letter-spacing: -3px;
  ${({ light }) => light ? `
    color: white;
  ` : `
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}

  small {
    font-size: 0.7em;
    font-style: italic;
    text-transform: lowercase;
    padding-right: 5px;
  }
`;

const Logo = ({ light, small }) => (
  <LogoComponent light={light} small={small}>Blue<small>Finance</small></LogoComponent>
);

Logo.propTypes = {
  light: PropTypes.bool,
  small: PropTypes.bool
};

Logo.defaultProps = {
  light: false,
  small: false
};

export default Logo;