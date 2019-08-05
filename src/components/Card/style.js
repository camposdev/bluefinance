import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 0 0 transparent;
  border-radius: 10px;
  transition: all 0.3s ease;
  user-select: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export const Percentage = styled.p`
  color: ${({isNegative}) => isNegative ? "var(--danger)" : "var(--success)"};
  font-size: 1.2rem;
  font-weight: bold;
  padding: 2px 10px;
  border-radius: 10px;
  margin: 0;
`;

export const Price = styled.h4`
  font-size: 1.8rem;
  white-space: nowrap;
  margin: 10px 0;
  background: var(--gradient-light);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Currency = styled.small`
  font-size: 1rem;
  opacity: 0.5;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;