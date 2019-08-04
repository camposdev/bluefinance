import styled from "styled-components";

export const LogoComponent = styled.h2`
  margin: 0;
  font-weight: 300;
  font-size: ${({ small }) => small ? `4rem` : `6rem`};
  letter-spacing: -0.05em;
  ${({ light }) => light ? `
    color: white;
  ` : `
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}

  small {
    font-size: 0.7em;
    font-style: italic;
    text-transform: lowercase;
    padding-right: 5px;
  }
`;
