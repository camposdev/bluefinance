import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/login">
            <Button>Sair</Button>
          </Link>
        </Flex>
      </Container>
    </Wrapper>
  )
}

export default Header;
