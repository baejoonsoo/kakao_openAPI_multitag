// import { styled } from "styled-components";
import styled from "@emotion/styled";

export const UrlInputForm = styled.form`
  width: 40vw;
  display: flex;
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
    width: 400px;
  }
`;
export const ImgBlock = styled.div`
  display: flex;
  width: 44vw;
  height: 94vh;
  justify-content: center;
  align-items: center;
`;

export const FormBlock = styled(ImgBlock)`
  justify-items: left;
  flex-direction: column;
  align-items: center;

  background-color: #d3f9d8;
  margin: 3vh 3vw;
  border-radius: 30px;
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
    font-family: "IM_Hyemin-Bold";

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const FileInput = styled.label`
  font-family: "IM_Hyemin-Bold";
  padding: 10px 15px;
  background-color: #69db7c;
  border-radius: 30px;
  color: white;
  margin-top: 5px;

  :active {
    transform: scale(0.95);
  }
`;
export const Title = styled.h1`
  font-family: "EliceDigitalBaeum-Bd";
  margin-top: -50px;
  color: #087f5b;
`;
