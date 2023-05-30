import styled from "styled-components";

export const Cashier = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  @media all and (max-width: 900px) {
    width: 95%;
    gap: 5px;
  }

  @media all and (max-width: 550px) {
    width: 90%;
    display: grid;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;

  @media all and (max-width: 300px) {
    font-size: 10px;
  }
`;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid gray;
  margin-top: 10px;
  color: #800000;
  font-weight: 600;
`;

export const InputAll = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid gray;
  margin-top: 10px;
  color: #800000;
  font-weight: 600;

  @media all and (max-width: 900px) {
    width: 85px;
  }

  @media all and (max-width: 500px) {
    width: 90%;
  }

  @media all and (max-width: 300px) {
    width: 90%;
  }
`;

export const RadioGrup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 20px;
    accent-color: #800000;
    margin-top: 0;
    margin-right: 5px;
  }

  @media all and (max-width: 550px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const Button = styled.button`
  background-color: #800000;
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  transition: 0.3s;
  &:not([disabled]):focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }

  &:not([disabled]):hover {
    transform: scale(1.1);
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }
`;
