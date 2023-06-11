import { Select } from "antd";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { styled } from "styled-components";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 0,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 5800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jul",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 5490,
    pv: 2300,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 2490,
    pv: 1300,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 1490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 6490,
    pv: 5300,
    amt: 2100,
  },
];

const StyledChart = styled.div`
  width: 68%;
  height: 585px;
  border-radius: 20px;
  background: #ffffff;
  padding: 35px 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  .head-chart {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    margin: 0;
    font-weight: 500;
    font-size: 24px;
    color: #a7a7a7;
  }
  .total {
    margin: 0;
    font-weight: 500;
    font-size: 36px;
    color: #000000;
  }
`;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

export const ChartRevenue = () => {
  return (
    <StyledChart>
      <div className="head-chart">
        <div>
          <p className="title">Total Revenue</p>
          <p className="total">$980,273.00</p>
        </div>
        <Select
          defaultValue="thisyear"
          style={{
            width: "13%",
            height: 35,
          }}
          onChange={handleChange}
          dropdownStyle={{
            background: "#FFF8E5",
          }}
          options={[
            {
              value: "thisyear",
              label: "THIS YEAR",
            },
            {
              value: "lastyear",
              label: "LAST YEAR",
            },
          ]}
        />
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={0}
        >
          <XAxis
            dataKey="name"
            tick={{ fill: "#A7A7A7" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Bar dataKey="pv" fill="#AEAEAE" radius={[13, 13, 0, 0]} />
          <Bar dataKey="uv" fill="#FF6F61" radius={[13, 13, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </StyledChart>
  );
};
