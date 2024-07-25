import {
  Overlay,
  Category,
  CategoryButton,
  ContextOverlay,
  TitleContent,
} from "../component";
import {
  TitleBar,
  WriteButton,
  CustomSelect,
  DiaryOverlay,
  DiaryBox,
} from "./component";
import { useNavigate } from "react-router-dom";
import StyledHeader from "../../header";
import { useEffect, useState } from "react";
import Footer from "../../Footer";

export type DiaryType = {
  index: number;
  img: string;
  week: string;
  content: string;
};

export const Diary = () => {
  const navigate = useNavigate();
  const sortList = ["최신순", "오래된순", "grape", "orange"];
  const [selected, setSelected] = useState("최신순");
  const [diaryList, setDiaryList] = useState<DiaryType[]>([
    {
      index: 1,
      img: "/img/DummyPicture.png",
      week: "14주차",
      content:
        "안녕 아가야 ~ 이제 우리 아가가 곧 나오겠구나 우리 쑥쑥이 빨리 보고싶다! 쑥쑥아 근데 밤에 왜이렇게 발로 차는거니 힘이 정말 장사야 엄마 넘 힘들어 좀 살살차봐 ~ 그리고 우리 쑥쑥이 지금 여름인데 수박을 왜이렇게 좋아하니!! 쑥쑥이는 수박이 정말 좋나봐 ㅠㅠ 어쩌구 저쩌구 많을 경우 자를 거임",
    },
    {
      index: 2,
      img: "/img/DummyPicture.png",
      week: "14주차",
      content:
        "안녕 아가야 ~ 이제 우리 아가가 곧 나오겠구나 우리 쑥쑥이 빨리 보고싶다! 쑥쑥아 근데 밤에 왜이렇게 발로 차는거니 힘이 정말 장사야 엄마 넘 힘들어 좀 살살차봐 ~ 그리고 우리 쑥쑥이 지금 여름인데 수박을 왜이렇게 좋아하니!! 쑥쑥이는 수박이 정말 좋나봐 ㅠㅠ 어쩌구 저쩌구 많을 경우 자를 거임",
    },
    {
      index: 3,
      img: "/img/DummyPicture.png",
      week: "14주차",
      content:
        "안녕 아가야 ~ 이제 우리 아가가 곧 나오겠구나 우리 쑥쑥이 빨리 보고싶다! 쑥쑥아 근데 밤에 왜이렇게 발로 차는거니 힘이 정말 장사야 엄마 넘 힘들어 좀 살살차봐 ~ 그리고 우리 쑥쑥이 지금 여름인데 수박을 왜이렇게 좋아하니!! 쑥쑥이는 수박이 정말 좋나봐 ㅠㅠ 어쩌구 저쩌구 많을 경우 자를 거임",
    },
    {
      index: 4,
      img: "/img/DummyPicture.png",
      week: "14주차",
      content:
        "안녕 아가야 ~ 이제 우리 아가가 곧 나오겠구나 우리 쑥쑥이 빨리 보고싶다! 쑥쑥아 근데 밤에 왜이렇게 발로 차는거니 힘이 정말 장사야 엄마 넘 힘들어 좀 살살차봐 ~ 그리고 우리 쑥쑥이 지금 여름인데 수박을 왜이렇게 좋아하니!! 쑥쑥이는 수박이 정말 좋나봐 ㅠㅠ 어쩌구 저쩌구 많을 경우 자를 거임",
    },
  ]);

  useEffect(() => {}, []);

  return (
    <div>
      <StyledHeader></StyledHeader>
      <Overlay>
        <Category>
          <CategoryButton
            clicked={false}
            content="수첩"
            onClick={() => navigate("/notebook")}
          ></CategoryButton>
          <CategoryButton
            clicked={true}
            content="일기"
            onClick={() => {}}
          ></CategoryButton>
        </Category>

        <ContextOverlay>
          <TitleBar>
            <TitleContent content="예비 엄마와 아이의 일기장"></TitleContent>
            <CustomSelect
              setState={setSelected}
              selected={selected}
              sortList={sortList}
            ></CustomSelect>
            <WriteButton></WriteButton>
          </TitleBar>
          <DiaryOverlay>
            {diaryList.map((dairy) => (
              <DiaryBox key={dairy.index} diary={dairy} />
            ))}
          </DiaryOverlay>
        </ContextOverlay>
      </Overlay>
      <Footer></Footer>
    </div>
  );
};
