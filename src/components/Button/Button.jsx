import React from "react";
import PropTypes from "prop-types";
import { ButtonComponent } from "./style";


const Button = ({ children, ...props }) => <ButtonComponent {...props}>{children}</ButtonComponent>

Button.propTypes = {
  children: PropTypes.any.isRequired,
  light: PropTypes.bool,
  large: PropTypes.bool
};

Button.defautProps = {
  light: false,
  large: false
};

export default Button;