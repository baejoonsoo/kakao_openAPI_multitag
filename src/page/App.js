import { useRef, useState } from "react";
import { getMultitagOfURL } from "../api/axios";
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

    setTags(result.label_kr);
    setImgView(url.current.value);

    url.current.value = "";
  };

  return (
    <S.Page>
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
