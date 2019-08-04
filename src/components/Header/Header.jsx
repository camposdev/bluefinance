import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import Button from "../Button";
import Flex from "../Flex";
import { Wrapper } from "./style";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Flex>
          <Logo color small />
          <Button>Sair</Button>
        </Flex>
      </Container>
    </Wrapper>
  )
}

export default Header;
