import styled from "styled-components";

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

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const FeaturedWraper = styled.div`
  padding: 50px 0;
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