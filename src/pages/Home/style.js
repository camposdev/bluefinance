import styled from "styled-components";
import Percent from '../../components/Percent';

export const Wrapper = styled.div`
  background-color: var(--dark);
  color: white;
  min-height: 100vh;
`;

export const ListItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-bottom: 80px;

  @media (min-width: 576px) {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }

  @media (min-width: 992px) {
    grid-column-gap: 30x;
    grid-row-gap: 30px;
  }
`;

export const FeaturedWraper = styled.div`
  padding: 50px 0 0;
  margin-bottom: 50px;
  color: white;
  background: var(--gradient-primary);
`;

export const GraphContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Percentage = styled(Percent)`
  font-size: 1.4rem;
`;

export const Price = styled.h4`
  font-size: 4rem;
  margin: 10px 0 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Chart = styled.div`
  width: 100%;
  height: 250px;
`;

export const Footer = styled.footer`
  padding: 30px 0;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  text-align: center;
  font-style: italic;
  border-top: 1px solid rgba(255,255,255,0.1);
`;