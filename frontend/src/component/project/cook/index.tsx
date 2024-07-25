import React, { useState } from "react";
import {
  ArrowComponenet,
  BlockContainer,
  CenterContainer,
  CenterTitle,
  CookArrowBlock,
  CookMainBlock,
  CookSubBlock,
  CookSubTitle2,
  CookSubTitte,
  CookTestBlock,
  FlexContainer,
  FlexsContainer,
  Inner,
  RowContainer,
  TexContainer,
} from "./component";
import { StyledHeader } from "../header/component";
import Header from "../header";

export const Cook = () => {
  return (
    <div>
      <Header/>
      <Inner>
        <FlexsContainer />
        <TexContainer>
          이달의 HOT 조리원
          <RowContainer>
            <CookMainBlock>
              [경기 용인] 자연속에서 함께하는 용인뽀송조리원
            </CookMainBlock>
            <CookMainBlock>
              [경기 용인] 자연속에서 함께하는 용인뽀송조리원
            </CookMainBlock>
          </RowContainer>
          <CenterContainer>
            <CenterTitle>조리원 Best 후기 {">"}</CenterTitle>
          </CenterContainer>
        </TexContainer>

        <FlexContainer>
          <CookSubBlock>
            <CookSubTitte>서울 어디 조리원 솔직한 리뷰</CookSubTitte>
            <CookSubTitle2>
              안녕하세요 ~ 제가 서울 관악구 00동에 있는 조리원에 가봤습니다 역시
              좋은 ...
            </CookSubTitle2>
          </CookSubBlock>
          <CookSubBlock>
            <CookSubTitte>서울 어디 조리원 솔직한 리뷰</CookSubTitte>
            <CookSubTitle2>
              안녕하세요 ~ 제가 서울 관악구 00동에 있는 조리원에 가봤습니다 역시
              좋은 ...
            </CookSubTitle2>
          </CookSubBlock>
          <CookSubBlock>
            <CookSubTitte>서울 어디 조리원 솔직한 리뷰</CookSubTitte>
            <CookSubTitle2>
              안녕하세요 ~ 제가 서울 관악구 00동에 있는 조리원에 가봤습니다 역시
              좋은 ...
            </CookSubTitle2>
          </CookSubBlock>
          <CookSubBlock>
            <CookSubTitte>서울 어디 조리원 솔직한 리뷰</CookSubTitte>
            <CookSubTitle2>
              안녕하세요 ~ 제가 서울 관악구 00동에 있는 조리원에 가봤습니다 역시
              좋은 ...
            </CookSubTitle2>
          </CookSubBlock>
          <CookSubBlock>
            <CookSubTitte>서울 어디 조리원 솔직한 리뷰</CookSubTitte>
            <CookSubTitle2>
              안녕하세요 ~ 제가 서울 관악구 00동에 있는 조리원에 가봤습니다 역시
              좋은 ...
            </CookSubTitle2>
          </CookSubBlock>
          <CookSubBlock>
            <CookSubTitte>서울 어디 조리원 솔직한 리뷰</CookSubTitte>
            <CookSubTitle2>
              안녕하세요 ~ 제가 서울 관악구 00동에 있는 조리원에 가봤습니다 역시
              좋은 ...
            </CookSubTitle2>
          </CookSubBlock>
        </FlexContainer>
      </Inner>
      <BlockContainer />
      <Inner>
        <CenterContainer>
          <CenterTitle>예비 엄마들의 조리원 정보 공유</CenterTitle>
        </CenterContainer>

        <RowContainer>
          <CookTestBlock>
            <CookSubTitte>서울 어디 조리원 솔직한 리뷰</CookSubTitte>
            <CookSubTitle2>
              안녕하세요 ~ 제가 서울 관악구 00동에 있는 조리원에 가봤습니다 역시
              좋은 ...
            </CookSubTitle2>
          </CookTestBlock>
          <CookTestBlock>
            <CookSubTitte>서울 어디 조리원 솔직한 리뷰</CookSubTitte>
            <CookSubTitle2>
              안녕하세요 ~ 제가 서울 관악구 00동에 있는 조리원에 가봤습니다 역시
              좋은 ...
            </CookSubTitle2>
          </CookTestBlock>
          <CookArrowBlock>조리원 정보가 더 궁금하신가요?</CookArrowBlock>
        </RowContainer>
      </Inner>
    </div>
  );
};
