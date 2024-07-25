import styled from "@emotion/styled";
import { HTMLAttributes, ReactNode } from "react";

interface ConsiderBoxItemProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
  opacity?: number;
  children?: ReactNode; 
}

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: -40px;

  
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;

`;

export const HelpBoxItem = styled.div<ConsiderBoxItemProps>`
  width: 450px;
  height: 200px;
  box-shadow: 6px 8px 17px 0px rgba(47, 76, 153, 0.25);
  flex-shrink: 0;
  border-radius: 40px;
  background: ${(props) => props.backgroundColor || "#D9D9D9"};
  display: flex;
  margin-left: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #FFF;
  .slideTitle{
  color: #FFF;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  }
  .slideContext{
  color: #FFF;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 0px */
  text-align: center;

  }
  opacity: ${(props) => props.opacity || 1}; // 추가: 투명도 적용
`;



// 수정: children 속성 추가
const SlideBox01: React.FC<{ backgroundColor?: string; opacity?: number; children?: ReactNode }> = ({ backgroundColor, opacity, children }) => {
  return (
    <HelpBoxItem backgroundColor={backgroundColor || "#84BDFF"} opacity={opacity}>
      {children}
      <h3 className="slideTitle">매주 주차별 증상 도움 알람</h3>
      <p className="slideContext">
      주차별 증상 헷갈리기 쉬웠죠? <br/>
      저희가 매주 알림으로 알려드립니다!</p>
    </HelpBoxItem>
  );
};

// 수정: children 속성 추가
const SlideBox02: React.FC<{ backgroundColor?: string; opacity?: number; children?: ReactNode }> = ({ backgroundColor, opacity, children }) => {
  return (
    <HelpBoxItem backgroundColor={backgroundColor || "#FF9494"} opacity={opacity}>
      {children}
      <h3 className="slideTitle">산모수첩 공유 및 산부인과 일정 관리</h3>
      <p className="slideContext">
        수기로 작성되는 산모수첩 매주 공유가 어렵다고 느껴지셨나요? <br/>
        산부인과 일정도 관리해드려요 😊</p>
    </HelpBoxItem>
  );
};

export { SlideBox01, SlideBox02 };
