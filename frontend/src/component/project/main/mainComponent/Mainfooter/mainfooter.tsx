import React from "react";
import { MainFooterContainer } from "./component"; 
import Footer from "../../../Footer";

export const MainFooter = () => {
  return (
    <div>
    <MainFooterContainer>
        <h3 className="mainFooterText">산모도 예비아빠도 편한</h3>
        <img className="mainFooterLogo" src="./img/mainFooterLogo.png" alt="메인푸터로고"/>
    </MainFooterContainer>
    <Footer/>
    </div>
    
  );
};
