import React, { useState } from 'react';
import {
  Button,
  PageContainer,
  HeaderContainer,
  ContentContainer,
  Content1,
  Content2,
  Content3,
  ButtonContainer
} from './component';



export const Intro = () => {
  const [activeButton, setActiveButton] = useState<number | null>(0)

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <PageContainer>
      <HeaderContainer>서비스 소개</HeaderContainer>
      <ContentContainer>
        {activeButton === 0 && <Content1/>}
        {activeButton === 1 && <Content2 />}
        {activeButton === 2 && <Content3 />}
      </ContentContainer>
      <ButtonContainer>
        <Button
          active={activeButton === 0}
          onClick={() => handleButtonClick(0)}
        >
          출산 전 지식 도움
        </Button>
        <Button
          active={activeButton === 1}
          onClick={() => handleButtonClick(1)}
        >
          산모 수첩/일기 공유
        </Button>
        <Button
          active={activeButton === 2}
          onClick={() => handleButtonClick(2)}
        >
          출산 후 케어 도움
        </Button>
      </ ButtonContainer>
    </PageContainer>
  );
};