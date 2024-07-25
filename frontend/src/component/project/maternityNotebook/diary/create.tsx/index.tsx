import { useState } from "react";
import { StyledHeader } from "../../../header/component";

export const DiaryCreate = () => {
  const [content, setContent] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const handleClick = () => {
    alert(content);
  };

  return (
    <div>
      <StyledHeader></StyledHeader>
      <div>
        <div>n주차</div>
        <textarea onChange={(e) => onChange(e)}></textarea>
        <button onClick={handleClick}>작성 완료</button>
      </div>
    </div>
  );
};
