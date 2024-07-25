/** @jsxImportSource @emotion/react */
import React from "react";
import { SlideBox01, SlideBox02 } from "./component";
import { FlexContainer, RowContainer } from "../Howwecanhelp/component";

export const Howwecanhelp = () => {
  const renderSlideBoxes = () => (
    <RowContainer>
        <SlideBox01 />
        <SlideBox02 />
    </RowContainer>
  );

  return (
      <RowContainer>
      <FlexContainer style={{
        marginLeft: '25%'
      }}>
      <SlideBox01 opacity={1}>
        <h3>01</h3>
      </SlideBox01>
      <SlideBox02 opacity={1}>
        <h3>02</h3>
      </SlideBox02>
      </FlexContainer>
      <FlexContainer style={{
        marginLeft: '-3%'
      }}>
      <SlideBox01 opacity={0.6}>
        <h3>03</h3>
      </SlideBox01>
      <SlideBox02 opacity={0.6}>
        <h3>04</h3>
      </SlideBox02>
      </FlexContainer>
      <FlexContainer style={{
        marginLeft: '45%'
      }}>
      <SlideBox01 opacity={0.4}>
        <h4>05</h4>
      </SlideBox01>
      <SlideBox02 opacity={0.4}>
        <h3>06</h3>
      </SlideBox02>
      </FlexContainer>
      </RowContainer>
  );
};
