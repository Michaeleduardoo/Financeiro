import styled from "styled-components";

export const Box = styled.div`
  max-width: 1120px;
  width: 98%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  margin-top: -50px;
  justify-content: space-around;

  @media all and (max-width: 550px) {
    margin-top: 30px;
    gap: 0;
  }
`;
