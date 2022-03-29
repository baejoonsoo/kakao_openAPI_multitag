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

    setTags(result);
    setImgView(url.current.value);

    url.current.value = "";
  };

  const PreviewData = (result) => {
    setTags(result.label_kr);
  };

  const onFileChange = async ({ target: { files } }) => {
    const theFile = files[0];

    const formData = new FormData();
    formData.append("image", theFile);

    const {
      data: { result },
    } = await getMultitagOfFile(formData);

    console.log(result);
    setTags(result);
  };

  return (
    <S.Page>
      <input type="file" accept="image/*" onChange={onFileChange} />
      <S.UrlInputForm onSubmit={getMultitag}>
        <input ref={url} type="text" />
        <button>GET</button>
      </S.UrlInputForm>
      {imgView && (
        <S.Preview>
          <img src={imgView} alt="img" />
          <S.Tags>
            {tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </S.Tags>
        </S.Preview>
      )}
    </S.Page>
  );
}

export default App;
