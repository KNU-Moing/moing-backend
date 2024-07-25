/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import theme from "../../../styles/theme";
import { useNavigate } from "react-router-dom";

export const CookMainBlock = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      font-family: Inter;
      font-family: Inter;
      ${theme.typography.body4Bold}
    `}
  >
    <img
      src="/img/hot.PNG"
      css={css`
        display: flex;
        flex-direction: column;
        width: 52.5rem;
        height: 253px;
        background-color: #d9d9d9;
        font-family: Inter;
        border-radius: 10px;
      `}
    ></img>
    {children}
  </div>
);

export const Inner = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      margin-top: 10px;
      flex-direction: column;
      gap: 5rem;
      padding: 7.5rem;
      ${theme.typography.body4Bold}
    `}
  >
    {children}
  </div>
);
export const RowContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      gap: 1.6rem;
    `}
  >
    {children}
  </div>
);
export const TexContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      color: #000;
      font-family: Inter;
      font-size: 2.4rem;
      font-weight: 600;
    `}
  >
    {children}
  </div>
);
export const FlexContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1.6rem;
      width: 100%;
      justify-content: space-around;
    `}
  >
    {children}
  </div>
);
export const BlockContainer = () => (
  <img
    src="/img/tex.PNG"
    css={css`
      width: 100%;
      height: 15rem;
      background-color: #d9d9d9;
    `}
  ></img>
);
export const CenterContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div
    css={css`
      display: flex;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
  >
    {children}
  </div>
);

export const CenterTitle = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      font-size: 2rem;
      font-family: "JAM";
      font-style: normal;
      font-weight: 700;
      border-radius: 1.2rem;
      line-height: 1.5;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.8rem;
      color: #000;
      text-align: center;
      font-family: Pretendard Variable;
      font-size: 40px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    `}
  >
    {children}
  </div>
);
export const ArrowComponenet = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.28308 11.0143L15.6281 11.0143L9.35508 17.2903C9.10973 17.524 8.97086 17.848 8.97086 18.1868C8.97086 18.5256 9.10973 18.8496 9.35508 19.0833V19.0833C9.58875 19.3287 9.91276 19.4675 10.2516 19.4675C10.5904 19.4675 10.9144 19.3287 11.1481 19.0833L19.4711 10.7583C19.9842 10.1717 19.9842 9.29592 19.4711 8.7093L11.1461 0.384304C10.9124 0.138947 10.5884 8.01086e-05 10.2496 8.01086e-05C9.91076 8.01086e-05 9.58675 0.138947 9.35308 0.384304H9.35308C9.10773 0.61797 8.96886 0.941983 8.96886 1.2808C8.96886 1.61962 9.10773 1.94364 9.35308 2.1773L15.6281 8.45231L1.28308 8.45231C0.93734 8.43135 0.59919 8.55956 0.354267 8.80449C0.109341 9.04941 -0.0188796 9.38756 0.00208282 9.73331V9.73331C-0.0188796 10.079 0.109341 10.4172 0.354263 10.6621C0.599189 10.907 0.937336 11.0353 1.28308 11.0143V11.0143Z"
      fill="#377DFF"
    />
  </svg>
);

export const CookSubBlock = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      font-family: Inter;
      ${theme.typography.body4Bold}
    `}
  >
    <img
      src="/img/seul.PNG"
      css={css`
        display: flex;
        flex-direction: column;
        width: 31.5rem;
        height: 18rem;
        background-color: #d9d9d9;
        font-family: Pretendard;
        border-radius: 10px;
        &:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}
    ></img>
    {children}
  </div>
);
export const CookTestBlock = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      font-family: Inter;
      ${theme.typography.body4Bold}
      font-weight: 600;
    `}
  >
    <img
      src="/img/ab.PNG"
      css={css`
        display: flex;
        flex-direction: column;
        width: 32.5rem;
        height: 27.8rem;
        background-color: #d9d9d9;
        font-family: Pretendard;
        border-radius: 10px;
        &:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}
    />
    {children}
  </div>
);
export const CookArrowBlock = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      font-family: Inter;
      width: 32.5rem;
      height: 27.8rem;
      align-items: center;
      justify-content: center;
      ${theme.typography.body1Bold}
    `}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="176"
      height="104"
      viewBox="0 0 176 104"
      fill="none"
    >
      <path
        d="M0 48H174.5M174.5 48L127.5 103M174.5 48L127.5 1"
        stroke="black"
      />
    </svg>

    {children}
  </div>
);
export const CookSubTitte = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      ${theme.typography.body3Bold}
      font-family: Inter;
      font-weight: 600;
    `}
  >
    {children}
  </div>
);
export const CookSubTitle2 = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      font-family: Pretendard;
      width: 31.5rem;
      ${theme.typography.body4Bold}
      font-family: Inter;
      font-weight: 600;
    `}
  >
    {children}
  </div>
);

const CookSlide = ({
  children,
  onClick,
  isSelected,
}: {
  children: React.ReactNode;
  onClick: () => void;
  isSelected: boolean;
}) => (
  <div
    onClick={onClick}
    css={css`
      width: 7.75rem;
      height: 4.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${isSelected ? "#FF9494" : "white"};
      color: ${isSelected ? "white" : "black"};
      font-family: Pretendard;
      border-radius: 20px;
      ${theme.typography.body3Bold}
      transform: translateY(${isSelected ? "0" : "10px"});
      transition: transform 0.3s ease;
      font-weight: 600;
      border: 1px solid #ff9494;
    `}
  >
    {children}
  </div>
);
const CookSlide2 = ({
  children,
  onClick,
  isSelected,
}: {
  children: React.ReactNode;
  onClick: () => void;
  isSelected: boolean;
}) => (
  <div
    onClick={onClick}
    css={css`
      display: flex;
      width: calc(32% - 1.6rem);
      align-items: center;
      margin-left: 1rem;
    `}
  >
    <div
      onClick={onClick}
      css={css`
        display: flex;
        font-family: Pretendard;
        ${theme.typography.body3Bold}
        cursor: pointer;
        padding: 10px;
        margin-left: 30%;
        border-radius: 10px;
        background-color: ${isSelected ? "#FF9494" : "#fff"};
        color: ${isSelected ? "white" : "black"};
        transform: translateY(${isSelected ? "0" : "10px"});
        transition: transform 0.3s ease;
      `}
    >
      {children}
    </div>
  </div>
);
export const FlexsContainer = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [Option, setOption] = useState<string>("지역을 선택해주세요");
  const navigate = useNavigate();
  const getDataForOption = (option: string | null) => {
    if (option === "서울") {
      return [
        "강남/역삼/삼성",
        "서울역/이태원/용산",
        "구로/신도림/금천",
        "신사/청담/압구정",
        "종로/인사동",
        "김포공항/염창/강서",
        "서초/고대/사당",
        "홍대/합정/마포/서대문",
        "건대입구/성수/왕십리",
        "잠실/송파/강동",
        "여의도",
        "성북/강북/노원/도봉",
        "을지로/명동/종구/동대문",
        "영등포역",
      ];
    } else if (option === "경기") {
      return [
        "수원역/구운/행궁/장안구",
        "성남/분당/위례",
        "동탄/화성/오산/병정",
        "하남/광주/여주/이천",
        "안산/상록수/선부동/월피동",
        "군포/의왕/긍정/산본",
        "평택/송탄/안성",
        "일산/고양/부천",
        "파주/의정부/구리",
        "남양주/포천/양주/연천",
        "양평/가평/청평",
        "김포",
        "월곶/정왕/오이도/거북섬",
        "제부도/대부도",
      ];
    } else if (option === "충북") {
      return [
        "흥덕구/서원구",
        "상당구/청원구",
        "청주/수안보",
        "제천/단양",
        "진천/음성",
        "보은/옥천",
        "과산/증평/영동",
      ];
    } else if (option === "충남") {
      return [
        "천안 서북구",
        "천안 동남구",
        "아산",
        "공주/동학사/세종",
        "계룡/금산/논산/청양",
        "예산/흑성",
        "태안/안면도",
        "서산",
        "당진",
        "보령/대천",
        "서천/부여",
      ];
    } else if (option === "전남") {
      return [
        "여수",
        "순천",
        "광양",
        "목포",
        "무안/영암/신안",
        "나주/함평/영광/장성",
        "담양/곡성/화산/구례",
        "혜남/완도/진도",
        "강진/장흥",
        "보선/고흥",
      ];
    } else if (option === "전북") {
      return [
        "덕진구",
        "완산구/완주",
        "군산",
        "악산",
        "남원/임실/순창",
        "무주/진안/장수",
        "정읍/부안/김제/고창",
      ];
    } else if (option === "경남") {
      return [
        "상남동/용호동",
        "중앙동/창원시청",
        "명서동/북곡동/팔용동",
        "마산",
        "진해",
        "김해/장유",
        "양산/밀양",
        "진주",
        "거제/통영/고성",
        "사천/남해",
        "하동/산청/함양",
        "거창/함안",
        "창념/의령",
      ];
    } else if (option === "경북") {
      return [
        "포항/남구",
        "포항/북구",
        "경주",
        "구미",
        "경산",
        "안동",
        "영천/청도",
        "김천/칠곡/성주",
        "문경/상주/영주/예천/의성/봉화",
        "울진/영덕/청송",
        "울릉도",
      ];
    } else if (option === "강원") {
      return [
        "춘천/강촌",
        "원주",
        "사천/주문진",
        "강릉",
        "영월/정선",
        "속초/고성",
        "양양",
        "동해/삼척/태백",
        "평창",
        "홍천/횡성",
        "화천/철원/인제/양구",
      ];
    } else if (option === "충북") {
      return [
        "흥덕구/서원구",
        "상당구/청원구",
        "청주/수안보",
        "제천/단양",
        "진천/음성",
        "보은/옥천",
        "과산/증평/영동",
      ];
    } else if (option === "제주") {
      return [
        "서귀포/중문/모슬포",
        "하귀/애월/한림/협재",
        "황덕/감녕/세화",
        "남원/표선/성산",
      ];
    } else {
      return [];
    }
  };
  const handleCookSlideClick = (option: string) => {
    setSelectedOption(option);
    setSelectedItem(null);
  };

  const handleItemSelect = (item: string) => {
    if (selectedItem === item) {
      const encodedItem = encodeURIComponent(item);
      setSelectedItem(encodedItem);
      navigate(`/Cook/${encodedItem}`);
    } else {
      setSelectedItem(item);
      setOption(item);
    }
  };

  const selectedData = getDataForOption(selectedOption);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        width: 100%;
        justify-content: space-around;
        font-family: Inter;
        margin-top: 3rem;
        ${theme.typography.body4Bold}
      `}
    >
      <CenterContainer>
        <CenterTitle>{Option}</CenterTitle>
      </CenterContainer>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 2.4rem;
          width: 100%;
          justify-content: space-around;
          cursor: pointer;
        `}
      >
        {[
          "서울",
          "경기",
          "충북",
          "충남",
          "전남",
          "전북",
          "경남",
          "경북",
          "강원",
          "제주",
        ].map((option) => (
          <CookSlide
            key={option}
            onClick={() => handleCookSlideClick(option)}
            isSelected={selectedOption === option}
          >
            {option}
          </CookSlide>
        ))}

        {selectedData.length > 0 && (
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 0.2rem;
              width: 100%;
              margin-top: rem;
              justify-content: flex-start;
              cursor: pointer;
            `}
          >
            {selectedData.map((item, index) => (
              <CookSlide2
                key={index}
                onClick={() => handleItemSelect(item)}
                isSelected={selectedItem === item}
              >
                {item}
              </CookSlide2>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
