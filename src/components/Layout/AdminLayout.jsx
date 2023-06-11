import { Sidebar } from "components/Sidebar";
import { styled } from "styled-components";
import { ReactComponent as Dots } from "assets/header/3dot.svg";
import { ReactComponent as Noti } from "assets/header/noti.svg";
import avt from "assets/header/avt.svg";
import search from "assets/header/search.svg";
import { Outlet } from "react-router-dom";
import { Layout, Space } from "antd";

const { Header, Sider, Content } = Layout;

const StyledHeader = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-weight: 700;
    font-size: 40px;
    color: #535353;
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 50px;
  }
  .search-form {
    width: 562px;
    height: 55px;
    background: #fff;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 18px 22px;
    border-radius: 10px;
  }
  #search {
    width: 100%;
    border: none;
    outline: none;
    font-size: 18px;
    color: #7b7878;
  }
  .dots {
    width: 24px;
    height: 24px;
  }
  .dots:hover {
    path {
      fill: #ff6f61;
    }
  }
  .noti {
    width: 20px;
    height: 22px;
  }
  .noti:hover {
    path {
      stroke: #ff6f61;
    }
  }
  .avt {
    width: 65px;
    height: 65px;
    border-radius: 50%;
  }
`;

const AdminLayout = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Sider width={300} theme="light">
          <Sidebar />
        </Sider>
        <Layout>
          <Header style={{ background: "#f3f3f3", height: "10%" }}>
            <StyledHeader>
              <span>Overview</span>
              <div className="search-form">
                <img src={search} alt="search icon" />
                <input
                  type="search"
                  id="search"
                  name="search"
                  placeholder="Search..."
                />
              </div>
              <div className="header-right">
                <Dots className="dots" />
                <Noti className="noti" />
                <img className="avt" src={avt} alt="avatar" />
              </div>
            </StyledHeader>
          </Header>
          <Content
            style={{
              padding: "30px 0px 80px 50px",
              boxSizing: "border-box",
              background: "#f3f3f3;",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Space>
  );
};

export default AdminLayout;
