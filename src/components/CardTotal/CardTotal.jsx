import { styled } from "styled-components";

const StytedCard = styled.div`
  width: 150px;
  height: 80px;
  background: #eeeeee;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    width: 25px;
    height: 25px;
  }
  .text {
    font-weight: 600;
    font-size: 13px;
    color: #7b7878;
  }
`;

export const CardTotal = ({ image, title, amount }) => {
  return (
    <StytedCard>
      <img src={image} alt="icon" />
      <div className="text">
        <p>{title}</p>
        <p>{amount}</p>
      </div>
    </StytedCard>
  );
};
