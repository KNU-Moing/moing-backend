import styled from "@emotion/styled";
import React, { useState } from "react";
import nextIcon from "../../../../assets/paginationNextBtn.png";
import beforeIcon from "../../../../assets/paginationBeforeBtn.png";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 200px;
`;

export const StyledInput = styled.input`
  width: 1000px;
  height: 100px;
  border-radius: 40px;
  border: none;
  background: #fff2f2;

  &::placeholder {
    color: red;
  }
`;

export const StyledButton = styled.button`
  width: 182px;
  height: 55px;
  border-radius: 92px;
  background: #ff9494;
  border: none;
  margin-top: 34px;
  cursor: pointer;
  color: #ffffff;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledQuestionContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

export const StyledQABox = styled.div`
  width: 600px;
  height: 300px;
  border-radius: 30px;
  border: 0.5px solid #ff9494;
  padding: 30px;
  text-align: center;
  margin: 28px;

  h3 {
    color: #000;
    font-family: "Inter";
    font-size: 23px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0; // Remove margin for the h3 element
  }

  p {
    color: #000;
    font-family: "Inter";
    font-size: 18px;
    font-weight: normal;
    line-height: 1.5;
    text-align: left;
    &.boldTextMom {
      font-weight: bold;
      color: #ff9494;
    }
    &.boldTextDad {
      font-weight: bold;
      color: #81bbff;
    }
  }
`;

const qaData = [
  {
    id: 1,
    question: "01 임테기로 아이를 처음 확인한 날 기분이 어떠셨나요?",
    momAnswer: "쑥쑥이엄마 1",
    dadAnswer: "쑥쑥이아빠 1",
  },
  {
    id: 2,
    question: "01 임테기로 아이를 처음 확인한 날 기분이 어떠셨나요?",
    momAnswer: "쑥쑥이엄마 1",
    dadAnswer: "쑥쑥이아빠 1",
  },
  {
    id: 3,
    question: "01 임테기로 아이를 처음 확인한 날 기분이 어떠셨나요?",
    momAnswer: "쑥쑥이엄마 1",
    dadAnswer: "쑥쑥이아빠 1",
  },
  {
    id: 4,
    question: "01 임테기로 아이를 처음 확인한 날 기분이 어떠셨나요?",
    momAnswer: "쑥쑥이엄마 1",
    dadAnswer: "쑥쑥이아빠 1",
  },
  {
    id: 5,
    question: "01 임테기로 아이를 처음 확인한 날 기분이 어떠셨나요?",
    momAnswer: "쑥쑥이엄마 1",
    dadAnswer: "쑥쑥이아빠 1",
  },
  {
    id: 6,
    question: "01 임테기로 아이를 처음 확인한 날 기분이 어떠셨나요?",
    momAnswer: "쑥쑥이엄마 1",
    dadAnswer: "쑥쑥이아빠 1",
  },
  {
    id: 7,
    question: "01 임테기로 아이를 처음 확인한 날 기분이 어떠셨나요?",
    momAnswer: "쑥쑥이엄마 1",
    dadAnswer: "쑥쑥이아빠 1",
  },
  {
    id: 8,
    question: "01 임테기로 아이를 처음 확인한 날 기분이 어떠셨나요?",
    momAnswer: "쑥쑥이엄마 1",
    dadAnswer: "쑥쑥이아빠 1",
  },
  {
    id: 9,
    question: "01 임테기로 아이를 처음 확인한 날 기분이 어떠셨나요?",
    momAnswer: "쑥쑥이엄마 1",
    dadAnswer: "쑥쑥이아빠 1",
  },
  //axios로 대체할 예정
];

const itemsPerPage = 8;

const QABoxPagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the QA data based on the current page
  const currentQAData = qaData.slice(startIndex, endIndex);
  const totalPageCount = Math.ceil(qaData.length / itemsPerPage);

  const canGoPrevious = currentPage > 1;
  const canGoNext = qaData.length > endIndex;

  const numColumns = 2;
  const rows = [];
  for (let i = 0; i < currentQAData.length; i += numColumns) {
    rows.push(currentQAData.slice(i, i + numColumns));
  }

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((qa) => (
            <StyledQABox key={qa.id}>
              <h3>{qa.question}</h3>
              <p className="boldTextMom">쑥쑥이엄마</p>
              <p>{qa.momAnswer}</p>
              <p className="boldTextDad">쑥쑥이아빠</p>
              <p>{qa.dadAnswer}</p>
            </StyledQABox>
          ))}
        </div>
      ))}

      {/* Pagination buttons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button
            style={{
              background: "transparent",
              border: "none",
            }}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={!canGoPrevious}
          >
            <img src={beforeIcon} alt="paginationBefore" />
          </button>
        </div>
        <div>
          {Array.from({ length: totalPageCount }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                background: "transparent",
                color: currentPage === index + 1 ? "#FF9494" : "#FF9494",
                border: "none",
                marginRight: "5px",
                fontFamily: "Pretendard Variable",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div>
          <button
            style={{
              background: "transparent",
              border: "none",
            }}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={!canGoNext}
          >
            <img src={nextIcon} alt="paginationNext" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const QABox = () => {
  return (
    <div>
      <StyledQuestionContainer>
        <QABoxPagination />
      </StyledQuestionContainer>
    </div>
  );
};
