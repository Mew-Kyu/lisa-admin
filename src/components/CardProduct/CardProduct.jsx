import { styled } from "styled-components";

const StyledCard = styled.div`
  height: 80px;
  width: 100%;
  background: #eeeeee;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  img {
    max-width: 50px;
    max-height: 50px;
  }
  .info {
    width: 20%;
  }
  .name {
    font-weight: 600;
    font-size: 16px;
    text-transform: capitalize;
    color: #000000;
  }
  .about {
    font-weight: 500;
    font-size: 14px;
    color: #7b7878;
  }
  .data-product {
    text-align: center;
  }
  .label {
    font-weight: 500;
    font-size: 18px;
    color: #7b7878;
  }
  .number {
    font-weight: 500;
    font-size: 14px;
    color: #000000;
  }
`;

export const CardProduct = ({
  image,
  name,
  color,
  orders,
  inventory,
  sale,
  price,
  today,
}) => {
  return (
    <StyledCard>
      <img src={image} alt="product" />
      <div className="info">
        <p className="name">{name}</p>
        <p className="about">
          {color} - {orders} orders
        </p>
      </div>
      <div className="data-product">
        <p className="label">Inventory</p>
        <p className="number">{inventory}</p>
      </div>
      <div className="data-product">
        <p className="label">Sale</p>
        <p className="number">${sale}</p>
      </div>
      <div className="data-product">
        <p className="label">Price</p>
        <p className="number">${price}</p>
      </div>
      <div className="data-product">
        <p className="label">Today</p>
        <p className="number">${today}</p>
      </div>
    </StyledCard>
  );
};
