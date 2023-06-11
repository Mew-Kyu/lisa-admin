import { styled } from "styled-components";
import made from "assets/dashboard/made.svg";
import orders from "assets/dashboard/orders.svg";
import sales from "assets/dashboard/sales.svg";
import visits from "assets/dashboard/visits.svg";
import p1 from "assets/dashboard/product 1.svg";
import p2 from "assets/dashboard/product 2.svg";
import { CardTotal } from "components/CardTotal";
import { CardProduct } from "components/CardProduct";

const StyledTop = styled.div`
  width: 68%;
  height: 435px;
  border-radius: 20px;
  background: #ffffff;
  padding: 35px 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .title {
    font-weight: 500;
    font-size: 24px;
    color: #535353;
    padding-bottom: 18px;
  }
`;

const dataTotal = [
  {
    image: visits,
    title: "Total Visits",
    amount: "10.8m",
  },
  {
    image: sales,
    title: "Total Sales",
    amount: "100,345",
  },
  {
    image: made,
    title: "Total Made",
    amount: "$200k",
  },
  {
    image: orders,
    title: "Orders Completed",
    amount: "98,771",
  },
];

const dataTop = [
  {
    image: p1,
    name: "Nike Sportswear Futura Luxe",
    color: "Pink",
    orders: 50,
    inventory: 700,
    sale: "1,000.60",
    price: "1,300.92",
    today: "17,000.92",
  },
  {
    image: p2,
    name: "Basic dress",
    color: "Green",
    orders: 25,
    inventory: 200,
    sale: "1,200.60",
    price: "1,500.92",
    today: "12,000.82",
  },
];

export const TopTotal = () => {
  return (
    <StyledTop>
      <div className="top">
        {dataTotal.map((item) => (
          <CardTotal
            title={item.title}
            image={item.image}
            amount={item.amount}
          />
        ))}
      </div>
      <div className="bottom">
        <p className="title">Top Products</p>
        <div className="top-product">
          {dataTop.map((item) => (
            <CardProduct
              image={item.image}
              name={item.name}
              orders={item.orders}
              color={item.color}
              inventory={item.inventory}
              sale={item.sale}
              price={item.sale}
              today={item.today}
            />
          ))}
        </div>
      </div>
    </StyledTop>
  );
};
