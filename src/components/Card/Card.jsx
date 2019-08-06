import React from 'react';
import numeral from "numeral";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Percent from '../Percent';
import { Wrapper, Variation, Price, Currency } from "./style";

const Card = ({ data, variation }) => {
  const isNegative = data.variation < 0;
  
  return (
    <Wrapper>
      {!variation && (
        <>
          <Percent value={data.variation} />
          <Price>{numeral(data.buy || data.last).format('$0,0.00')}</Price>
        </>
      )}
      {variation && (
        <Variation negative={isNegative}>
          <FontAwesomeIcon icon={isNegative ? "chevron-down" : "chevron-up"} size="xs" />
          {numeral(data.variation).format('0.0[0000]')}%
        </Variation>
      )}
      <Currency>{data.name}</Currency>
      {variation && <Currency>{data.location}</Currency>}
    </Wrapper>
  );
};

export default Card;