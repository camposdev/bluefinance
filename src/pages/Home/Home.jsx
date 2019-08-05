import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import Container from "../../components/Container";
import { Wrapper, ListItems } from "./style";
import Loading from '../../components/Loading';
import Card from '../../components/Card/Card';
import Title from '../../components/Title';
import Featured from './Featured';

const Home = () => {
  const [data, setData] = useState([]);
  const [featuredData, setFeaturedData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currencies = "USD-BRL,CAD-BRL,EUR-BRL,ARS-BRL,JPY-BRL,AUD-BRL,GBP-BRL,CHF-BRL,BTC-BRL,LTC-BRL,XRP-BRL,ETH-BRL";

    fetch(`https://economia.awesomeapi.com.br/all/${currencies}`)
      .then(res => res.json())
      .then(res => {
        setData(Object.values(res));
        setLoading(false);
        setFeaturedData(Object.values(res)[0]);
      });
  }, []);

  return (
    <Wrapper>
      <Header />

      <Featured data={featuredData} />

      <Container>
        <Title>Cotação das principais moedas</Title>

        <ListItems>
          {data.length > 0 && data.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </ListItems>
      </Container>

      {loading && <Loading />}
    </Wrapper>
  );
}

export default Home;
