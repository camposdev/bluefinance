import styled from "styled-components";

export const ButtonComponent = styled.button`
  border: none;
  padding: 10px 40px;
  height: 4.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: bold;
  border-radius: 2.4rem;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ light }) => light ? `
    color: var(--primary);
    background: var(--gradient-light);
    box-shadow: 0 3px 10px rgba(255, 255, 255, 0.3);

    &:hover {
      box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
    }
    &:active {
      box-shadow: 0 0 0 rgba(255, 255, 255, 0.3);
    }
  ` : `
    color: white;
    background: var(--gradient-primary);
    box-shadow: 0 3px 10px rgba(44, 106, 255, 0.3);

    &:hover {
      box-shadow: 0 8px 20px rgba(44, 106, 255, 0.3);
    }
    &:active {
      box-shadow: 0 0 0 rgba(44, 106, 255, 0.3);
    }
  `}
`;