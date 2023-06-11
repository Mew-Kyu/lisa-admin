import { styled } from "styled-components";
import { ReactComponent as Config } from "assets/dashboard/config.svg";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  Cell,
  ResponsiveContainer,
} from "recharts";
const StyledChart = styled.div`
  width: 26%;
  height: 435px;
  border-radius: 20px;
  background: #ffffff;
  padding: 35px 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .head-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 50px;
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
`;

const data = [
  { name: "63%", value: 63, color: "#6C6C6C", label: "Women" },
  { name: "88%", value: 88, color: "#FF6B6B", label: "Men" },
  { name: "38%", value: 38, color: "#5F27CD", label: "Kids" },
];

export const ChartStats = () => {
  return (
    <StyledChart>
      <div className="head-stats">
        <div>
          <p className="title">Stats Overview</p>
          <p className="des">Information about store visits</p>
        </div>
        <Config />
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} layout="vertical">
          <YAxis
            dataKey="label"
            type="category"
            tickLine={false}
            axisLine={false}
            fontSize={14}
            style={{ fontWeight: 600, color: "#535353" }}
          />
          <XAxis type="number" axisLine={false} tickLine={false} tick={false} />
          <Tooltip />
          <Bar
            dataKey="value"
            background={{ fill: "#eee" }}
            barSize={8}
            radius={4}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList dataKey="name" position="bottom" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </StyledChart>
  );
};
