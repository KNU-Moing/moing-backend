import React, { useState } from "react";
import Modal from "react-modal";
import {
  BodyContainer,
  CheckButton,
  Images,
  InputContainer,
  InputSelectContainer,
  LoginButton,
  Modaldiv,
  Rowdiv,
  TopContainer,
  TopSelectContainer,
} from "../../../emotion/component";

export const SignUp = () => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "0px solid black",
    },
  };
  const ModalSignup = ({
    isOpen,
    closeModal,
  }: {
    isOpen: any;
    closeModal: any;
  }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="회원가입 모달"
        shouldCloseOnOverlayClick={true}
      >
        <TopContainer>
          <TopSelectContainer
            color="#FF9494"
            fontcolor="black"
            style="border-radius: 25px 0 0 0;"
          >
            로그인
          </TopSelectContainer>
          <TopSelectContainer
            color="#cacaca"
            fontcolor="white"
            style="border-radius: 0 25px 0 0;"
          >
            회원가입
          </TopSelectContainer>
        </TopContainer>
        <Modaldiv>
          {/* <button onClick={closeModal}>X</button> */}
          <BodyContainer>
            ID/PW
            <InputContainer placeholder="아이디" />
            <InputContainer placeholder="패스워드" />
          </BodyContainer>
          <Rowdiv>
            <CheckButton>로그인</CheckButton>
          </Rowdiv>
          <LoginButton>카카오 로그인</LoginButton>
        </Modaldiv>
      </Modal>
    );
  };
  const ModalSignIn = ({
    isOpen,
    closeModal,
  }: {
    isOpen: any;
    closeModal: any;
  }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="로그인 모달"
        shouldCloseOnOverlayClick={true}
      >
        <TopContainer>
          <TopSelectContainer
            color="#FF9494"
            fontcolor="white"
            style="border-radius: 25px 0 0 0;"
          >
            로그인
          </TopSelectContainer>
          <TopSelectContainer
            color="#F4F4F4"
            fontcolor="black"
            style="border-radius: 0 25px 0 0;"
          >
            회원가입
          </TopSelectContainer>
        </TopContainer>
        <Modaldiv>
          {/* <button onClick={closeModal}>X</button> */}
          <BodyContainer>
            ID/PW
            <InputSelectContainer
              placeholder="아이디"
              buttonholder="중복 확인"
            />
            <InputContainer placeholder="패스워드" />
          </BodyContainer>
          <BodyContainer>
            정보 입력
            <InputSelectContainer
              placeholder="이메일"
              buttonholder="인증하기"
            />
            <InputSelectContainer
              placeholder="인증번호"
              buttonholder="인증하기"
            />
            <InputContainer placeholder="닉네임" />
          </BodyContainer>
          <Rowdiv>
            <Images backgroundColor="#FF9494">산모</Images>
            <Images backgroundColor="#84BDFF">보호자</Images>
          </Rowdiv>
          <Rowdiv>
            <CheckButton>가입하기</CheckButton>
          </Rowdiv>
        </Modaldiv>
      </Modal>
    );
  };
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  return (
    <div>
      <button onClick={openSignupModal}>회원가입 모달 열기</button>
      <button onClick={openSignInModal}>로그인 모달 열기</button>
      <ModalSignup isOpen={isSignupModalOpen} closeModal={closeSignupModal} />
      <ModalSignIn isOpen={isSignInModalOpen} closeModal={closeSignInModal} />
    </div>
  );
};
