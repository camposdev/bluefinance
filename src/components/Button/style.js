import styled from "styled-components";

export const ButtonComponent = styled.button`
  position: relative;
  border: none;
  padding: 5px ${({ large }) => large ? "40px" : "20px"};
  height: ${({ large }) => large ? "4.8rem" : "3.4rem"};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: bold;
  border-radius: 2.4rem;
  font-size: ${({ large }) => large ? "1.4rem" : "1.2rem"};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;

  ${({ light }) => light ? `
    color: var(--primary);
    background: var(--gradient-light);
    box-shadow: 0 3px 10px rgba(255, 255, 255, 0.3);

    &::before {
      background: var(--gradient-primary);
    }

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

    &::before {
      background: var(--gradient-light);
    }

    &:hover {
      box-shadow: 0 8px 20px rgba(44, 106, 255, 0.3);
    }
    &:active {
      box-shadow: 0 0 0 rgba(44, 106, 255, 0.3);
    }
  `}

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    &::before {
      opacity: 0.2;
    }
  }
`;