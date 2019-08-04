import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import Button from "../Button";
import { Wrapper } from "./style";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Button>Sair</Button>
      </Container>
    </Wrapper>
  )
}