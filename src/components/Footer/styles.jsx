import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  background-color: #fff;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border-radius: 5px;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;

  @media all and (max-width: 900px) {
    width: 95%;
  }

  @media all and (max-width: 550px) {
    width: 90%;
  }
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  font-size: 20px;
  font-weight: 600;
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};

  @media all and (max-width: 300px) {
    font-size: 10px;
  }
`;
