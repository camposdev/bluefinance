import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    width: 720px;
    padding: 0;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

const Container = ({ children }) => <Wrapper>{children}</Wrapper>

Container.propTypes = {
  children: PropTypes.any.isRequired
}

export default Container;