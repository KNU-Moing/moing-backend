import React, { useState } from "react";
import { ModalSignIn, ModalSignup } from "../../../emotion/Modal";
export const SignIn = () => {
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
      <button onClick={openModal}>로그인</button>
      {modalOpen && (
        <ModalSignup setModalOpen={setModalOpen} openSignInModal={openModal2} />
      )}
      <button onClick={openModal2}>회원가입</button>
      {modalOpen2 && (
        <ModalSignIn setModalOpen={setModalOpen2} openSignupModal={openModal} />
      )}
    </div>
  );
};
