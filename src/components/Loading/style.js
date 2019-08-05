import styled, { keyframes } from "styled-components";

const spinner = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;

export const LoadingComponent = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: white;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    margin-left: -30px;
    margin-top: -30px;
    border-radius: 50%;
    background: var(--gradient-primary);
    animation: ${spinner} 1s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    margin-left: -30px;
    margin-top: -30px;
    border-radius: 50%;
    background: white;
    transform: scale(-0.8);
  }
`;