// import { styled } from "styled-components";
import styled from "@emotion/styled";

export const UrlInputForm = styled.form`
  /* background-color: red; */
  margin-top: 100px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  button {
    width: 60px;
    height: 50px;
    border-radius: 25px;
    border: none;
    background-color: #69db7c;
    &:active {
      transform: scale(0.97);
    }
  }
  input {
    width: 430px;
    padding: 0 18px;
    border-radius: 30px;
    border: black 1px solid;

    font-size: 24px;
  }
`;

export const Page = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Preview = styled.div`
  max-width: 400px;
  position: relative;
  margin-top: 80px;

  img {
    width: 400px;
  }
`;

export const Tags = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;

  gap: 10px;
  width: 50%;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;

  span {
    cursor: pointer;
    border-radius: 13px;
    padding: 4px 6px;
    min-height: 20px;
    font-size: 15px;
    background-color: #c3fae8;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
