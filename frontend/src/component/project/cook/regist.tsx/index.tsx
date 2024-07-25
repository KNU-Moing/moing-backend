/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import {
  CenterContainer,
  CenterRowContainer,
  HeadContainer,
  Inner,
  RightContainer,
  RowContainer,
} from "./component";
import { useLocation, useParams } from "react-router-dom";
import Header from "../../header";
import { CookMainBlock } from "../component";

export const RegistCook = () => {
  const { item } = useParams();
  const [activeTab, setActiveTab] = useState("info");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <Header />
      <Inner>
        <HeadContainer> {item}</HeadContainer>

        <RowContainer>
          <img
            src="/img/tests.PNG"
            css={css`
              display: flex;
              flex-direction: column;
              width: 1000px;
              height: 500px;
              background-color: #d9d9d9;
              font-family: Inter;
              border-radius: 10px;
            `}
          ></img>
          <RightContainer
            Main="이번 달 예약 가능한 조리원입니다"
            Sub="강남구 별점 상위권 조리원입니다. 최선을 다하여 산모님을케어하는 가나다조리원입니다..... "
          ></RightContainer>
        </RowContainer>
        <CenterContainer>
          <div
            css={css`
              font-family: Pretendard Variable;
              font-size: 45px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              margin-bottom: 10px;
            `}
          >
            [강남] 가나다라조리원
          </div>
          <div
            css={css`
              color: #000;
              font-family: Pretendard Variable;
              font-size: 30px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              margin-bottom: 10px;
            `}
          >
            서울시 강남구 무슨서로 113-2 무슨건물 3층
          </div>
          <div
            css={css`
              color: #000;
              font-family: Pretendard Variable;
              font-size: 30px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            `}
          >
            ★ 8.5
          </div>
        </CenterContainer>
        <CenterRowContainer>
          <div
            onClick={() => handleTabClick("info")}
            css={css`
              margin: 10px;
              border-bottom: ${activeTab === "info"
                ? "3px solid #ff9494"
                : "none"};
            `}
          >
            조리원 정보
          </div>
          <div
            onClick={() => handleTabClick("reservation")}
            css={css`
              border-bottom: ${activeTab === "reservation"
                ? "3px solid #ff9494"
                : "none"};
            `}
          >
            조리원 예약
          </div>
          <div
            onClick={() => handleTabClick("review")}
            css={css`
              border-bottom: ${activeTab === "review"
                ? "3px solid #ff9494"
                : "none"};
              margin-bottom: ${activeTab === "review" ? "5px" : "0"};
            `}
          >
            리뷰
          </div>
        </CenterRowContainer>

        {activeTab === "info" && (
          <div
            css={css`
              width: 1683px;
              height: 702px;
              background: #f3f9ff;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            `}
          >
            프리미엄 조리원
            <div
              css={css`
                color: #000;

                font-family: GyeonggiBatang;
                font-size: 60px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              `}
            >
              가나다라 조리원
            </div>
          </div>
        )}
        {activeTab === "reservation" && (
          <div>
            <RowContainer>
              <div
                css={css`
                  width: 200rem;
                  height: 360px;
                  padding: 20px 25px;
                  border-radius: 15px;
                  border: 1px solid #ff9494;
                  color: #000;
                  display: flex;
                  flex-direction: row;
                  font-family: Pretendard Variable;
                  font-size: 30px;
                  font-style: normal;
                  font-weight: 300;
                  line-height: normal;
                `}
              >
                <div>
                  <img
                    src="/img/tests.PNG"
                    css={css`
                      display: flex;
                      flex-direction: column;
                      width: 592px;
                      height: 345px;
                      background-color: #d9d9d9;
                      font-family: Inter;
                      border-radius: 10px;
                    `}
                  ></img>
                </div>
                <div
                  css={css`
                    display: flex;
                    flex-direction: row;
                    text-align: left;
                    margin-top: 20px;
                  `}
                >
                  <div
                    css={css`
                      color: #000;
                      margin-left: 20px;

                      font-family: Pretendard Variable;
                      font-size: 45px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: normal;
                      display: flex;
                      text-align: left;
                    `}
                  >
                    2주 디럭스
                  </div>
                  <div
                    css={css`
                      color: #6d6d6d;

                      font-family: Pretendard Variable;
                      font-size: 30px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: normal;
                      margin: 10px;
                    `}
                  >
                    이용 해택 보기
                  </div>
                </div>
                <div
                  css={css`
                    width: 340px;
                    height: 300px;
                    flex-shrink: 0;
                    border-radius: 15px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    margin-left: 180px;
                    margin-top: 30px;
                    font-family: Pretendard Variable;
                    font-size: 30px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    background: linear-gradient(
                      110deg,
                      #ff9494 23.08%,
                      #ff5757 69.23%
                    );
                  `}
                >
                  2주 디럭스
                  <div
                    css={css`
                      color: #fff;
                      font-family: Pretendard Variable;
                      font-size: 50px;
                      font-style: normal;
                      font-weight: 700;
                      line-height: normal;
                    `}
                  >
                    예약하기
                  </div>
                </div>
              </div>
            </RowContainer>
            <RowContainer>
              <div
                css={css`
                  width: 200rem;
                  height: 360px;
                  padding: 20px 25px;
                  border-radius: 15px;
                  border: 1px solid #ff9494;
                  color: #000;
                  display: flex;
                  flex-direction: row;
                  font-family: Pretendard Variable;
                  font-size: 30px;
                  font-style: normal;
                  font-weight: 300;
                  line-height: normal;
                `}
              >
                <div>
                  <img
                    src="/img/tests.PNG"
                    css={css`
                      display: flex;
                      flex-direction: column;
                      width: 592px;
                      height: 345px;
                      background-color: #d9d9d9;
                      font-family: Inter;
                      border-radius: 10px;
                    `}
                  ></img>
                </div>
                <div
                  css={css`
                    display: flex;
                    flex-direction: row;
                    text-align: left;
                    margin-top: 20px;
                  `}
                >
                  <div
                    css={css`
                      color: #000;
                      margin-left: 20px;

                      font-family: Pretendard Variable;
                      font-size: 45px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: normal;
                      display: flex;
                      text-align: left;
                    `}
                  >
                    2주 디럭스
                  </div>
                  <div
                    css={css`
                      color: #6d6d6d;

                      font-family: Pretendard Variable;
                      font-size: 30px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: normal;
                      margin: 10px;
                    `}
                  >
                    이용 해택 보기
                  </div>
                </div>
                <div
                  css={css`
                    width: 340px;
                    height: 300px;
                    flex-shrink: 0;
                    border-radius: 15px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    margin-left: 180px;
                    margin-top: 30px;
                    font-family: Pretendard Variable;
                    font-size: 30px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    background: linear-gradient(
                      110deg,
                      #ff9494 23.08%,
                      #ff5757 69.23%
                    );
                  `}
                >
                  2주 디럭스
                  <div
                    css={css`
                      color: #fff;
                      font-family: Pretendard Variable;
                      font-size: 50px;
                      font-style: normal;
                      font-weight: 700;
                      line-height: normal;
                    `}
                  >
                    예약하기
                  </div>
                </div>
              </div>
            </RowContainer>
          </div>
        )}
        {activeTab === "review" && (
          <div
            css={css`
              width: 1683px;
              height: 702px;
              background: #f3f9ff;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            `}
          >
            Review
          </div>
        )}
      </Inner>
    </div>
  );
};
