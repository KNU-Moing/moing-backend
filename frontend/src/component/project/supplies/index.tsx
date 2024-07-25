import React, { useState } from "react";
import {
  BestContainer,
  CenterContainer,
  CenterTitle,
  FlexContainer,
  ImageContainer,
  Inner,
  RowContainer,
  SelectBox,
  SuppBlock,
  SuppCenBlock,
  SuppCenTitle,
  SuppTitte,
  SuppTitte2,
} from "./component";
import { FlexsContainer } from "./detail.tsx/component";
import Header from "../header";

export const Supplies = () => {
  return (
    <div>
      <Header />
      <Inner>
        <FlexsContainer />
        <CenterContainer>
          <CenterTitle>이 상품은 어때요? {">"}</CenterTitle>
          임산중기 산모들이 많이 구매한 제품들!
        </CenterContainer>
        <RowContainer>
          <SuppBlock>
            <SuppTitte>
              [추천영양제]임신중기 영양제 네모네모회사 영양제
            </SuppTitte>
            <SuppTitte2>33000원</SuppTitte2>
          </SuppBlock>
          <SuppBlock>
            <SuppTitte>
              [추천영양제]임신중기 영양제 네모네모회사 영양제
            </SuppTitte>
            <SuppTitte2>33000원</SuppTitte2>
          </SuppBlock>
          <SuppBlock>
            <SuppTitte>
              [추천영양제]임신중기 영양제 네모네모회사 영양제
            </SuppTitte>
            <SuppTitte2>33000원</SuppTitte2>
          </SuppBlock>
          <SuppBlock>
            <SuppTitte>
              [추천영양제]임신중기 영양제 네모네모회사 영양제
            </SuppTitte>
            <SuppTitte2>33000원</SuppTitte2>
          </SuppBlock>
        </RowContainer>
        <BestContainer>
          <SuppTitte2>이번주 실시간 랭킹</SuppTitte2>
          <RowContainer>
            <SuppCenBlock>
              <SuppCenTitle
                Title={"Best 3 제품"}
                text={"이번주에 가장 많이 팔렸어요!"}
              />
            </SuppCenBlock>
            <SuppBlock>
              <SuppTitte>
                [추천영양제]임신중기 영양제 네모네모회사 영양제
              </SuppTitte>
              <SuppTitte2>33000원</SuppTitte2>
            </SuppBlock>
            <SuppBlock>
              <SuppTitte>
                [추천영양제]임신중기 영양제 네모네모회사 영양제
              </SuppTitte>
              <SuppTitte2>33000원</SuppTitte2>
            </SuppBlock>
            <SuppBlock>
              <SuppTitte>
                [추천영양제]임신중기 영양제 네모네모회사 영양제
              </SuppTitte>
              <SuppTitte2>33000원</SuppTitte2>
            </SuppBlock>
          </RowContainer>
        </BestContainer>
        <BestContainer>
          <SuppTitte2>이번주 실시간 랭킹</SuppTitte2>
          <RowContainer>
            <SuppCenBlock>
              <SuppCenTitle
                Title={"Best 3 제품"}
                text={"이번주에 가장 많이 팔렸어요!"}
              />
            </SuppCenBlock>
            <SuppBlock>
              <SuppTitte>
                [추천영양제]임신중기 영양제 네모네모회사 영양제
              </SuppTitte>
              <SuppTitte2>33000원</SuppTitte2>
            </SuppBlock>
            <SuppBlock>
              <SuppTitte>
                [추천영양제]임신중기 영양제 네모네모회사 영양제
              </SuppTitte>
              <SuppTitte2>33000원</SuppTitte2>
            </SuppBlock>
            <SuppBlock>
              <SuppTitte>
                [추천영양제]임신중기 영양제 네모네모회사 영양제
              </SuppTitte>
              <SuppTitte2>33000원</SuppTitte2>
            </SuppBlock>
          </RowContainer>
        </BestContainer>
        <BestContainer>
          <SuppTitte2>이번주 실시간 랭킹</SuppTitte2>
          <RowContainer>
            <SuppCenBlock>
              <SuppCenTitle
                Title={"Best 3 제품"}
                text={"이번주에 가장 많이 팔렸어요!"}
              />
            </SuppCenBlock>
            <SuppBlock>
              <SuppTitte>
                [추천영양제]임신중기 영양제 네모네모회사 영양제
              </SuppTitte>
              <SuppTitte2>33000원</SuppTitte2>
            </SuppBlock>
            <SuppBlock>
              <SuppTitte>
                [추천영양제]임신중기 영양제 네모네모회사 영양제
              </SuppTitte>
              <SuppTitte2>33000원</SuppTitte2>
            </SuppBlock>
            <SuppBlock>
              <SuppTitte>
                [추천영양제]임신중기 영양제 네모네모회사 영양제
              </SuppTitte>
              <SuppTitte2>33000원</SuppTitte2>
            </SuppBlock>
          </RowContainer>
        </BestContainer>
        <CenterContainer>
          <CenterTitle>이 상품은 어때요?{">"}</CenterTitle>
          임산중기 산모들이 많이 구매한 제품들!
        </CenterContainer>
        <RowContainer>
          <SuppBlock>
            <SuppTitte>
              [추천영양제]임신중기 영양제 네모네모회사 영양제
            </SuppTitte>
            <SuppTitte2>33000원</SuppTitte2>
          </SuppBlock>
          <SuppBlock>
            <SuppTitte>
              [추천영양제]임신중기 영양제 네모네모회사 영양제
            </SuppTitte>
            <SuppTitte2>33000원</SuppTitte2>
          </SuppBlock>
          <SuppBlock>
            <SuppTitte>
              [추천영양제]임신중기 영양제 네모네모회사 영양제
            </SuppTitte>
            <SuppTitte2>33000원</SuppTitte2>
          </SuppBlock>
          <SuppBlock>
            <SuppTitte>
              [추천영양제]임신중기 영양제 네모네모회사 영양제
            </SuppTitte>
            <SuppTitte2>33000원</SuppTitte2>
          </SuppBlock>
        </RowContainer>
      </Inner>
    </div>
  );
};
