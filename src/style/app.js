// import { styled } from "styled-components";
import styled from "@emotion/styled";

export const UrlInputForm = styled.form`
  width: 40vw;
  display: flex;
  gap: 5px;

  button {
    width: 60px;
    height: 50px;

    color: white;
    font-family: "IM_Hyemin-Bold";
    font-size: 14px;

    border-radius: 25px;
    border: none;
    background-color: #69db7c;

    &:active {
      transform: scale(0.97);
    }
  }

  input {
    width: 80%;

    padding: 0 18px;

    border-radius: 30px;
    border: none;

    outline: none;

    font-size: 24px;
  }
`;

export const Page = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Preview = styled.div`
  max-width: 400px;
  position: relative;

  img {
    border: #808080 20px solid;
    width: 100%;
  }
`;

export const ImgBlock = styled.div`
  width: 44vw;
  height: 94vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormBlock = styled(ImgBlock)`
  background-color: #d3f9d8;

  justify-items: left;
  flex-direction: column;
  align-items: center;

  margin: 3vh 3vw;
  border-radius: 30px;
`;

export const Tags = styled.div`
  width: 60%;

  position: absolute;
  bottom: 30px;
  right: -10px;

  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;

  span {
    cursor: pointer;
    min-height: 20px;
    padding: 5px 7px;
    border-radius: 13px;

    font-size: 15px;
    word-wrap: break-word;
    font-family: "IM_Hyemin-Bold";

    background-color: #c3fae8;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const FileInput = styled.label`
  margin-top: 5px;
  padding: 10px 15px;
  border-radius: 30px;

  background-color: #69db7c;

  font-family: "IM_Hyemin-Bold";
  color: white;

  :active {
    transform: scale(0.95);
  }
`;

export const Title = styled.h1`
  font-family: "EliceDigitalBaeum-Bd";
  margin-top: -50px;
  color: #087f5b;
`;
