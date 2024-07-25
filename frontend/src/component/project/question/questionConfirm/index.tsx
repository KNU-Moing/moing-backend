import React, { useState} from "react";
import { LeftHeader, NavMenu, RightHeader, StyledHeader } from "../../header/component";
import { ContainerDiv, QABox } from "../questionWrite/component";
import { BackButton } from "../../../emotion/component";
import { QAConfirmBoxDad, QAConfirmBoxMom } from "./component";


const QuestionConfirm = () => {
    const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);

    return(
        <>
        <StyledHeader>
          <LeftHeader />
          <NavMenu isToggleOpen={isToggleOpen} />
          <RightHeader />
        </StyledHeader>
        <BackButton />
        <ContainerDiv>
          <div>
            <h2 style={{
              fontSize: '25px',
              textAlign: 'center',
              fontFamily: 'Pretendard Variable',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '50px'
              }}>오늘의 질문</h2>
            <p style={{
              fontSize: '20px',
              textAlign: 'center',
              fontFamily: 'Pretendard Variable',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal'
            }}>
              오늘은 날이 화창하네요<br/>
              쑥쑥이 엄마가 오늘 낮에 먹고 싶었던 음식은 무엇인가요?
            </p>
          </div>
          <div>
            <p style={{
                color: "#FF9494",
                fontFamily: "Pretendard Variable",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                textAlign: "left"

            }}>쑥쑥이엄마</p>
            <QAConfirmBoxMom/>
          </div>
          <div>
            <p style={{
                color: "#81BBFF",
                fontFamily: "Pretendard Variable",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                textAlign: "left"

            }}>쑥쑥이아빠</p>
            <QAConfirmBoxDad/>
          </div>
        </ContainerDiv>
        <QABox/>
      </>
    );
}

export default QuestionConfirm;