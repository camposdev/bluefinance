import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;

const Flex = props => <Wrapper {...props} />;

Flex.propTypes = {
  justify: PropTypes.string,
  align: PropTypes.string
};

Flex.defaultProps = {
  justify: "space-between",
  align: "center"
};

export default Flex;
