import { ReactComponent as Config } from "assets/dashboard/config.svg";
import { styled } from "styled-components";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const StyledChart = styled.div`
  height: 585px;
  width: 26%;
  border-radius: 20px;
  background: #ffffff;
  padding: 35px 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  .head-cus {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg:hover {
      path {
        stroke: #ff6f61;
      }
    }
  }
  .title {
    margin: 0;
    font-weight: 700;
    font-size: 30px;
    color: #535353;
  }
  .des {
    margin: 0;
    font-weight: 600;
    font-size: 14px;
    color: #a7a7a7;
  }
  .chart {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

const datacur = [
  {
    name: "Group A",
    value: 85,
  },
  {
    name: "Group B",
    value: 15,
  },
];
const COLORSCUR = ["#5F27CD", "#E2E2E2"];

const datanew = [
  {
    name: "Group A",
    value: 66,
  },
  {
    name: "Group B",
    value: 24,
  },
];
const COLORSNEW = ["#6C6C6C", "#E2E2E2"];

const datatar = [
  {
    name: "Group A",
    value: 90,
  },
  {
    name: "Group B",
    value: 10,
  },
];
const COLORSTAR = ["#FF8918", "#E2E2E2"];

const datare = [
  {
    name: "Group A",
    value: 90,
  },
  {
    name: "Group B",
    value: 10,
  },
];
const COLORSRE = ["#FF6F61", "#E2E2E2"];

export const ChartCustomers = () => {
  return (
    <StyledChart>
      <div className="head-cus">
        <div>
          <p className="title">Customers</p>
          <p className="des">Information About your Customers</p>
        </div>
        <Config />
      </div>
      <div className="chart">
        <ResponsiveContainer width="50%" height="40%">
          <PieChart>
            <Pie
              data={datacur}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
            >
              {datacur.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORSCUR[index % COLORSCUR.length]}
                />
              ))}
            </Pie>
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              style={{ fontWeight: 700, fontSize: 18 }}
            >
              <tspan style={{ fill: "#5F27CD", fontSize: 36 }}>
                {datacur[0].value}
              </tspan>
              %
            </text>
            <text
              x="50%"
              y="95%"
              dominantBaseline="middle"
              textAnchor="middle"
              style={{ fontWeight: 600, fontSize: 14, fill: "#A7A7A7" }}
            >
              Current Customers
            </text>
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="50%" height="40%">
          <PieChart>
            <Pie
              data={datanew}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
            >
              {datanew.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORSNEW[index % COLORSNEW.length]}
                />
              ))}
            </Pie>
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              style={{ fontWeight: 700, fontSize: 18 }}
            >
              <tspan style={{ fill: "#6C6C6C", fontSize: 36 }}>
                {datanew[0].value}
              </tspan>
              %
            </text>
            <text
              x="50%"
              y="95%"
              dominantBaseline="middle"
              textAnchor="middle"
              style={{ fontWeight: 600, fontSize: 14, fill: "#A7A7A7" }}
            >
              New Customers
            </text>
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="50%" height="40%">
          <PieChart>
            <Pie
              data={datatar}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
            >
              {datatar.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORSTAR[index % COLORSTAR.length]}
                />
              ))}
            </Pie>
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              style={{ fontWeight: 700, fontSize: 18 }}
            >
              <tspan style={{ fill: "#FF8918", fontSize: 36 }}>
                {datatar[0].value}
              </tspan>
              %
            </text>
            <text
              x="50%"
              y="95%"
              dominantBaseline="middle"
              textAnchor="middle"
              style={{ fontWeight: 600, fontSize: 14, fill: "#A7A7A7" }}
            >
              Target Customers
            </text>
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="50%" height="40%">
          <PieChart>
            <Pie
              data={datare}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
            >
              {datare.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORSRE[index % COLORSRE.length]}
                />
              ))}
            </Pie>
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              style={{ fontWeight: 700, fontSize: 18 }}
            >
              <tspan style={{ fill: "#FF6F61", fontSize: 36 }}>
                {datare[0].value}
              </tspan>
              %
            </text>
            <text
              x="50%"
              y="95%"
              dominantBaseline="middle"
              textAnchor="middle"
              style={{ fontWeight: 600, fontSize: 14, fill: "#A7A7A7" }}
            >
              Retarget Customers
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </StyledChart>
  );
};
