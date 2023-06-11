import { ChartCustomers } from "components/ChartCustomers";
import { ChartRevenue } from "components/ChartRevenue/ChartRevenue";
import { ChartStats } from "components/ChartStats";
import { TopTotal } from "components/TopTotal";
import { Helmet } from "react-helmet";
import { styled } from "styled-components";

const StyledHome = styled.div`
  height: 99%;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`;

const Dashboard = () => {
  return (
    <StyledHome>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <ChartRevenue />
      <ChartCustomers />
      <TopTotal />
      <ChartStats />
    </StyledHome>
  );
};

export default Dashboard;
