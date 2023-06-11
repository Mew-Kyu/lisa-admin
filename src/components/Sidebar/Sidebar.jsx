import { styled } from "styled-components";
import { ReactComponent as Dashboard } from "assets/sidebar/dashboard.svg";
import { ReactComponent as Products } from "assets/sidebar/products.svg";
import { ReactComponent as Customers } from "assets/sidebar/customers.svg";
import { ReactComponent as Orders } from "assets/sidebar/orders.svg";
import { ReactComponent as Shipments } from "assets/sidebar/shipments.svg";
import { ReactComponent as Transactions } from "assets/sidebar/transactions.svg";
import { ReactComponent as Settings } from "assets/sidebar/settings.svg";
import { ReactComponent as Logout } from "assets/sidebar/logout.svg";
import { NavLink } from "react-router-dom";

const StyledBar = styled.div`
  height: 100vh;
  padding: 10px;
  text-align: center;
  .title {
    margin: 0;
    font-weight: 600;
    font-size: 34px;
    color: #1e2832;
  }
  .navbar {
    height: 600px;
    padding-top: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  a,
  .logout {
    width: 60%;
    display: flex;
    align-items: center;
    text-decoration: unset;
    color: #7a797d;
    gap: 16px;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
    transition: 0.3s;
    svg {
      width: 30px;
      height: 30px;
      path {
        stroke: #cdcdcd;
        transition: 0.3s;
      }
    }
    color: #cdcdcd;
  }
  a:hover,
  .logout:hover {
    svg {
      path {
        fill: #ff6f61;
        stroke: #ff6f61;
      }
    }
    color: #ff6f61;
  }
  .active {
    svg {
      path {
        fill: #ff6f61;
        stroke: #ff6f61;
      }
    }
    color: #ff6f61;
  }
`;

export const Sidebar = () => {
  return (
    <StyledBar>
      <p className="title">Lisa Admin</p>
      <div className="navbar">
        <NavLink to="/">
          <Dashboard />
          <span className="nav-item">Dashboard</span>
        </NavLink>
        <NavLink to="/product">
          <Products />
          <span className="nav-item">Products</span>
        </NavLink>
        <NavLink to="/customer">
          <Customers />
          <span className="nav-item">Customers</span>
        </NavLink>
        <NavLink to="/order">
          <Orders />
          <span className="nav-item">Orders</span>
        </NavLink>
        <NavLink to="/shipment">
          <Shipments />
          <span className="nav-item">Shipments</span>
        </NavLink>
        <NavLink to="/transaction">
          <Transactions />
          <span className="nav-item">Transactions</span>
        </NavLink>
        <NavLink to="/setting">
          <Settings />
          <span className="nav-item">Settings</span>
        </NavLink>
        <div className="logout">
          <Logout />
          <span className="nav-item">Logout</span>
        </div>
      </div>
    </StyledBar>
  );
};
