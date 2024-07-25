import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BrandingLeft,
  CustomButton,
  BrandingRight
} from "./component";
import { ModalSignIn, ModalSignup } from "../../../../emotion/Modal";
import Header from "../../../header";

const Branding: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const openModal2 = () => {
    setModalOpen2(true);
  };
  return (
    <div>
      <div>
        <Header/>
      </div>
      <BrandingLeft>
      같이의 가치
      <img className="brandingLogo" src="./img/brandingLogo.png" alt="브랜딩로고"/>
      </BrandingLeft>
      <CustomButton onClick={openModal}>로그인/회원가입</CustomButton>
      {modalOpen && (
        <ModalSignup setModalOpen={setModalOpen} openSignInModal={openModal2} />
      )}
      {modalOpen2 && (
        <ModalSignIn setModalOpen={setModalOpen2} openSignupModal={openModal} />
      )}
    <BrandingRight>
      <img className="ssugssugImg" src="./img/ssugssug.png" alt="쑥쑥이"/>
    </BrandingRight>
    </div>
  );
};

export default Branding;
