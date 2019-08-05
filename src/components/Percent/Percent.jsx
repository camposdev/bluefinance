import React from 'react';
import styled from "styled-components";

const PercentComponent = styled.small`
  color: ${({isNegative}) => isNegative ? "var(--danger)" : "var(--success)"};
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  margin: 0;
`;

const Percent = ({value, ...props}) => {
  const isNegative = value && value.charAt(0) === "-";

  return (
    <PercentComponent isNegative={isNegative} {...props}>{value}%</PercentComponent>
  );
};

export default Percent;