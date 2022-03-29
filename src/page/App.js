import { useRef, useState } from "react";
import { getMultitagOfFile, getMultitagOfURL } from "../api/axios";
import * as S from "../style/app";

function App() {
  const url = useRef();
  const [imgView, setImgView] = useState("");
  const [tags, setTags] = useState([]);

  const getMultitag = async (e) => {
    e.preventDefault();
    setImgView("");

    const {
      data: { result },
    } = await getMultitagOfURL(url.current.value);

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

    const formData = new FormData();
    formData.append("image", theFile);

    const {
      data: { result },
    } = await getMultitagOfFile(formData);

    console.log(result);
    PreviewData(result);

    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;

      setImgView(result);
    };
    await reader.readAsDataURL(theFile);
  };

  return (
    <S.Page>
      <S.FormBlock>
        <S.Title>멀티태그 생성</S.Title>
        <S.UrlInputForm onSubmit={getMultitag}>
          <input ref={url} type="text" />
          <button>GET</button>
        </S.UrlInputForm>
        <S.FileInput htmlFor="fileInput">파일찾기</S.FileInput>
        <input
          style={{ display: "none" }}
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />
      </S.FormBlock>
      <S.ImgBlock>
        {imgView && (
          <S.Preview>
            <img src={imgView} alt="img" />
            <S.Tags>
              {tags.length ? (
                tags.map((tag) => <span key={tag}>#{tag}</span>)
              ) : (
                <span>적절한 태그를 찾을 수 없습니다</span>
              )}
            </S.Tags>
          </S.Preview>
        )}
      </S.ImgBlock>
    </S.Page>
  );
}

export default App;
