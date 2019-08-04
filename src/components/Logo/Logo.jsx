import React from "react";
import PropTypes from 'prop-types';
import { LogoComponent } from "./style";

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