import { useEffect, useState } from "react";
import StyledHeader from "../header";
import {
  Overlay,
  Container,
  CommunityContent,
  TitleBar,
  RecommendLayout,
} from "./component";
import {
  ContentBoxLayer,
  MoreButton,
  Circle,
  TwoBoxLayout,
} from "../../emotion/component";
import theme from "../../../styles/theme";
import Footer from "../Footer";

export const Community = () => {
  const [circles, setCircles] = useState([
    {
      styles: "width: 14.5rem; height: 14.5rem; top: 6rem; left: -20rem;",
      content: "태동",
      fontSize: "2rem",
    },
    {
      styles: "width: 13rem; height: 13rem; top: 11rem; left: 9rem;",
      content: "영양제",
      fontSize: "1.9rem",
    },
    {
      styles: "width: 11rem; height: 11rem; top: 6rem; left: 19rem;",
      content: "철분",
      fontSize: "1.7rem",
    },
    {
      styles: "width: 8rem; height: 8rem; top: 3rem; left: -6rem;",
      content: "입덧",
      fontSize: "1.7rem",
    },
    {
      styles: "width: 6rem; height: 6rem; top: 8rem; left: 3rem;",
      content: "졸림",
      fontSize: "1.4rem",
    },
    {
      styles: "width: 4.5rem; height: 4.5rem; top: 12.5rem; left: -26.5rem;",
      content: "튼살",
      fontSize: "1.2rem",
    },
  ]);
  const [recommends, setRecommends] = useState([
    {
      title: "입덧 극복하는 방법 꿀팁 (현재 3남매 기르는중)",
      content:
        "여러분 또또맘입니다~ 제가 이번에 또~ 하하 그렇게 되었네요 ㅎㅎ 그래서 여러분께...",
    },
    {
      title: "아. 아이스크림이 먹고 싶다!",
      content:
        "먹덧으로 미쳐버리겠습니다. 아이스크림이 먹고 싶은데 신랑이 회식갔어요 ㅠㅠㅠㅠㅠ ...",
    },
    {
      title: "임신 초기 조심해야할 것",
      content:
        "임신 초기는 안정기가 아니라 조심해야하죠 그래서 제가 조심해야할 것들을...",
    },
    {
      title: "미리 준비하면 좋은 것들!",
      content:
        "아이를 낳기 전에 미리 준비하면 좋은 것들을 준비해봤어요 일단 랭킹 1위 제품 ...",
    },
  ]);
  const [questions, setQuestions] = useState([{ title: "", content: "" }]);
  const moreHandle = () => {
    alert("더보기 버튼");
  };
  const handleTopicDetail = (topic: string) => {
    alert(`토픽 ${topic}으로 이동`);
  };

  // 질문 데이터 앞에 Q.와 A.를 붙이는 작업
  useEffect(() => {
    const additionQ = recommends.map((recommend) => {
      return {
        title: "Q." + recommend.title,
        content: "A." + recommend.content,
      };
    });
    setQuestions(additionQ);
  }, []);

  return (
    <div>
      <StyledHeader></StyledHeader>
      <Overlay>
        <RecommendLayout>
          {circles.map((circle, index) => (
            <Circle
              key={index}
              styles={circle.styles}
              content={circle.content}
              fontSize={circle.fontSize}
              color={
                index == 0 || index == 2 || index == 3
                  ? "#84BDFF"
                  : theme.palette.pink[100]
              }
              onClick={() => handleTopicDetail(circle.content)}
            ></Circle>
          ))}
        </RecommendLayout>
        <TitleBar></TitleBar>
        <TwoBoxLayout>
          <ContentBoxLayer
            title="의사 선생님께 많이 묻는 질문"
            styleFlex="block"
            styleWidth="100%"
            styleHeight="56vh"
          >
            <MoreButton pagename="QnA" styleLeft="35.5vw"></MoreButton>
            <Container>
              {questions.map((recommend, index) => (
                <CommunityContent
                  key={index}
                  title={recommend.title}
                  content={recommend.content}
                ></CommunityContent>
              ))}
            </Container>
          </ContentBoxLayer>
          <ContentBoxLayer
            title="실시간 추천 게시글"
            styleFlex="block"
            styleWidth="100%"
            styleHeight="56vh"
          >
            <MoreButton pagename="Board" styleLeft="35.5vw"></MoreButton>
            <Container>
              {recommends.map((recommend, index) => (
                <CommunityContent
                  key={index}
                  title={recommend.title}
                  content={recommend.content}
                ></CommunityContent>
              ))}
            </Container>
          </ContentBoxLayer>
        </TwoBoxLayout>

        <ContentBoxLayer
          title="엄마들의 수다 수다"
          styleFlex="block"
          styleWidth="90%"
          styleHeight="34vh"
        >
          <MoreButton pagename="community/QnA" styleLeft="77.4vw"></MoreButton>
          <Container>
            {recommends.map((recommend, index) => (
              <CommunityContent
                key={index}
                title={recommend.title}
                content={recommend.content}
              ></CommunityContent>
            ))}
          </Container>
        </ContentBoxLayer>
      </Overlay>
      <Footer></Footer>
    </div>
  );
};
