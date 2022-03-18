import { useRef, useState } from "react";
import { getMultitagOfFile, getMultitagOfURL } from "../api/axios";
import * as S from "../style/app";

function App() {
  const url = useRef();
  const [imgView, setImgView] = useState("");
  const [tags, setTags] = useState([]);
  const [attachment, setAttachment] = useState("");

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

  const onFileChange = async ({ target: { files } }) => {
    const theFile = files[0];
    console.log("click");
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      console.log("length0 :", result.length);

      setAttachment(result);
      const data = getMultitagOfFile(result);
      console.log(data);
    };
    await reader.readAsDataURL(theFile);

    console.log("length :", attachment.length);
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
