import styled from "styled-components";
import DefaultButton from "../../components/Button";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: var(--secondary);
  background: var(--gradient-primary);
  color: white;
  padding: 0 20px;
`;

export const Form = styled.form`
  margin-top: 30px;
  max-width: 350px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 10px 15px;
  margin-bottom: 20px;
  height: 4.8rem;
  border-radius: 2.4rem;
  color: white;
  font-size: 1.6rem;
  box-shadow: 0 0 0 transparent;
  transition: all 0.3s ease;
  
  &::placeholder,
  &::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;
  }

  &:focus {
    background-color: white;
    border-color: white;
    color: var(--dark);
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.3);

    &::placeholder,
    &::-webkit-input-placeholder {
      color: var(--dark);
    }
  }
`;

export const Button = styled(DefaultButton)`
  width: 100%;
`;

export const SeparateForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 30px;
    border-top: 1px solid white;
    opacity: 0.5;
    margin-right: 10px;
  }

  &::after {
    margin-right: 0;
    margin-left: 10px;
  }
`;

export const Anchor = styled.a`
  color: white;
  font-size: 1.4rem;
  &:hover {
    text-decoration: none;
  }
`;