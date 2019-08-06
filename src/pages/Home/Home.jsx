import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import Container from "../../components/Container";
import { Wrapper, ListItems, Footer } from "./style";
import Loading from '../../components/Loading';
import Card from '../../components/Card/Card';
import Title from '../../components/Title';
import Featured from './Featured';

const Home = () => {
  const [currencies, setCurrencies] = useState([]);
  const [bitcoin, setBitcoin] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [featuredData, setFeaturedData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const key = "2ec6985e";
    fetch(`https://api.hgbrasil.com/finance?format=json-cors&key=${key}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        const currencyItems = Object.values(res.results.currencies).filter(item => item.name && item.name !== "Bitcoin");
        const bitcoinItems = Object.values(res.results.bitcoin).filter(item => item.format[0] === "BRL");
        const stocksItems = Object.values(res.results.stocks);
        setFeaturedData(currencyItems[0]);
        setCurrencies(currencyItems);
        setBitcoin(bitcoinItems);
        setStocks(stocksItems);
        setLoading(false);
      });
  }, []);

  const changeFeatured = item => {
    window.scrollTo(0, 0);
    setFeaturedData(item);
  };

  return (
    <Wrapper>
      <Header />

      <Featured data={featuredData} />

      <Container>
        <Title>Cotação das principais moedas</Title>
        <ListItems>
          {currencies.length > 0 && currencies.map((item, index) => (
            <Card key={index} data={item} onClick={() => changeFeatured(item)} />
          ))}
        </ListItems>

        <Title>Cotação do Bitcoin nas principais corretoras</Title>
        <ListItems>
          {bitcoin.length > 0 && bitcoin.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </ListItems>
        
        <Title>Índices de bolsas de valores pelo mundo</Title>
        <ListItems>
          {stocks.length > 0 && stocks.map((item, index) => (
            <Card key={index} data={item} variation />
          ))}
        </ListItems>

        <Footer>
          Bluefinance - Felipe Campos
        </Footer>
      </Container>

      {loading && <Loading />}
    </Wrapper>
  );
}

export default Home;
