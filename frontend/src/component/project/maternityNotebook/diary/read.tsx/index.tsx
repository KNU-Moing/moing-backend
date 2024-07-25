import { useState } from "react";
import { StyledHeader } from "../../../header/component";
import { useNavigate, useParams } from "react-router";

export const DiaryRead = () => {
  const navigate = useNavigate();
  const { item } = useParams();
  const [content, setContent] = useState("일기 내용");

  const handleDelete = () => {
    alert(content);
  };
  const handleUpdate = () => {
    navigate(`/diary/update/${item}`);
  };

  return (
    <div>
      <div>
        <div>{item}주차</div>
        <div>
          <p>본문 내용</p>
          <p>{content}</p>
        </div>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={handleUpdate}>수정</button>
      </div>
    </div>
  );
};
