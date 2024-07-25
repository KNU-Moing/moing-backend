/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import {
  ArrowComponenet,
  BlockContainer,
  CenterContainer,
  CenterTitle,
  CookArrowBlock,
  CookMainBlock,
  CookTestBlock,
  FlexContainer,
  FlexsContainer,
  HeadContainer,
  Inner,
  RowContainer,
  SearchContainer,
} from "./component";
import { useLocation, useParams } from "react-router-dom";
import { CookSubBlock, CookSubTitle2, CookSubTitte } from "../component";
import { StyledHeader } from "../../header/component";
import Header from "../../header";

export const Detail = () => {
  const { item } = useParams();
  return (
    <div>
      <Header/>
      <Inner>
        <HeadContainer> {item}</HeadContainer>
        <SearchContainer />
        <RowContainer>
          <CookMainBlock>
            [서울 양재] 자연속에서 함께하는 양재양양양조리원 <br />
            <br />
            2주 5000000원
          </CookMainBlock>
          <CookMainBlock>
            [서울 양재] 자연속에서 함께하는 양재양양양조리원 <br />
            <br />
            2주 5000000원
          </CookMainBlock>
        </RowContainer>
        <RowContainer>
          <CookMainBlock>
            [서울 양재] 자연속에서 함께하는 양재양양양조리원 <br />
            <br />
            2주 5000000원
          </CookMainBlock>
          <CookMainBlock>
            [서울 양재] 자연속에서 함께하는 양재양양양조리원 <br />
            <br />
            2주 5000000원
          </CookMainBlock>
        </RowContainer>
        <RowContainer>
          <CookMainBlock>
            [서울 양재] 자연속에서 함께하는 양재양양양조리원 <br />
            <br />
            2주 5000000원
          </CookMainBlock>
          <CookMainBlock>
            [서울 양재] 자연속에서 함께하는 양재양양양조리원 <br />
            <br />
            2주 5000000원
          </CookMainBlock>
        </RowContainer>
        <CenterContainer>
          <CenterTitle>
            {item} Best 후기 {">"}
          </CenterTitle>
        </CenterContainer>
      </Inner>
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
    </div>
  );
};
