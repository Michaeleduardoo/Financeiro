import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;
  font-size: 20px;
  font-weight: 500;
  color: #800000;
  svg {
    width: 18px;
    height: 18px;
  }

  @media all and (max-width: 300px) {
    font-size: 10px;
    svg {
      width: 13px;
      height: 13px;
    }
  }
`;
