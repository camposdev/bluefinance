import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import Container from "../../components/Container";
import { Wrapper } from "./style";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const key = "e1acfb28";
    fetch(`https://api.hgbrasil.com/finance`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  }, []);

  return (
    <Wrapper>
      <Header />

      <Container>
        oi
      </Container>
    </Wrapper>
  );
}

export default Home;
