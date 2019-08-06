import React from 'react';
import { XAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import Container from '../../components/Container';
import Title from "../../components/Title";
import numeral from 'numeral';
import { FeaturedWraper, GraphContent, Price, Info, Chart, Percentage } from "./style";

const Featured = ({ data }) => {
  const dataGraph = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

  return (
    <FeaturedWraper>
      <Container>
        <Title large>Cotação do {data.name}</Title>
        
        <GraphContent>
          <Info>
            <Percentage value={data.variation} />
            <Price>{numeral(data.buy || data.last).format('$0,0.00')}</Price>
          </Info>

          <Chart>
            <ResponsiveContainer>
              <LineChart
                data={dataGraph}
              >
                <XAxis dataKey="name" tick={{fill: 'transparent', fontSize: 8 }} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{color: "var(--dark)"}}
                  itemStyle={{color: "var(--primary)", fontWeight: "bold"}}
                  cursor={{ stroke: 'transparent', strokeWidth: 0 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#ffffff" fill="#ffffff" />
              </LineChart>
            </ResponsiveContainer>
          </Chart>
        </GraphContent>
      </Container>
    </FeaturedWraper>
  );
};

export default Featured;