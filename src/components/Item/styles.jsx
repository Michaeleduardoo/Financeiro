import styled from "styled-components";
//17:00
export const Cashier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 12px;
  width: 30%;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  text-align: center;

  @media all and (max-width: 900px) {
    width: 25%;
    svg {
      display: none;
    }
  }

  @media all and (max-width: 550px) {
    width: 18%;
    svg {
      display: none;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 20px;
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Title = styled.h3`
  font-size: 25px;
  font-weight: 500;
  @media all and (max-width: 500px) {
    font-size: 20px;
  }
  @media all and (max-width: 300px) {
    font-size: 10px;
  }
`;

export const Valor = styled.span`
  font-size: 65px;
  font-weight: bold;

  @media all and (max-width: 900px) {
    font-size: 40px;
  }

  @media all and (max-width: 500px) {
    font-size: 15px;
  }

  @media all and (max-width: 300px) {
    font-size: 10px;
  }
`;
