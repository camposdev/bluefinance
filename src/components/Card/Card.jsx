import React from 'react';
import { Wrapper, Percentage, Price, Currency } from "./style";
import formatCurrency from '../../utils/formatCurrency';

const Card = ({ data }) => {
  const isNegative = data.pctChange.charAt(0) === "-";

  return (
    <Wrapper>
      <Percentage isNegative={isNegative}>{data.pctChange}%</Percentage>
      <Price>{formatCurrency(data.ask)}</Price>
      <Currency>{data.name} / {data.codein}</Currency>
    </Wrapper>
  );
};

export default Card;