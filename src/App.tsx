import { useRef, useState } from "react";
import { getMultitagOfFile, getMultitagOfURL } from "./api/axios";
import styled from "@emotion/styled";

function App() {
  const url = useRef<HTMLInputElement>();
  const [imgView, setImgView] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const getMultitag = async (e) => {
    e.preventDefault();
    setImgView("");

    const {
      data: { result },
    }: any = await getMultitagOfURL(url.current.value);

    PreviewData(result);
    setImgView(url.current.value);

    url.current.value = "";
  };

  const PreviewData = (result) => {
    setTags(result.label_kr);
    console.log(result);
  };

  const onFileChange = async ({ target: { files } }) => {
    const theFile = files[0];

    // 서버로 전송하기 위한 파일 formData
    const formData = new FormData();
    formData.append("image", theFile);

    const {
      data: { result },
    }: any = await getMultitagOfFile(formData);

    console.log(result);
    PreviewData(result);

    // 화면에 띄우기 위한 변환작업
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      }: any = finishedEvent;

      setImgView(result);
    };
    await reader.readAsDataURL(theFile);
  };

  return (
    <Page>
      <FormBlock>
        <Title>멀티태그 생성</Title>
        <UrlInputForm onSubmit={getMultitag}>
          <input ref={url} type="text" />
          <button>GET</button>
        </UrlInputForm>
        <FileInput htmlFor="fileInput">파일찾기</FileInput>
        <input
          style={{ display: "none" }}
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />
      </FormBlock>
      <ImgBlock>
        {imgView && (
          <Preview>
            <img src={imgView} alt="img" />
            <Tags>
              {tags.length ? (
                tags.map((tag) => <span key={tag}>#{tag}</span>)
              ) : (
                <span>적절한 태그를 찾을 수 없습니다</span>
              )}
            </Tags>
          </Preview>
        )}
      </ImgBlock>
    </Page>
  );
}

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

export default App;
