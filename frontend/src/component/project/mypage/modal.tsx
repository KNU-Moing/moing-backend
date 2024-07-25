import React, { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Modal from "react-modal";
import theme from "../../../styles/theme";
import {
  InfoModalStyles,
  InfoOpenModalStyles,
  updatedModalStyles,
  HospiModalStyles,
  HospiOpenModalStyles,
} from "./modalStyle";
import {
  CancelBtn,
  SubmitBtn,
  EmailInfo,
  InputWithBtn,
  InputPwd,
  InputHospital,
  ModalTitle,
  SubmitContext,
  InfoLayout,
} from "./modalComponent";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}
interface InfoModalProps {
  isOpen: boolean;
  closeModal: () => void;
  openModel: () => void;
}

export const HospitalModal = ({ isOpen, closeModal }: ModalProps) => {
  const [name, setName] = useState("");
  const [sendRequest, setSendRequest] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleSubmit = () => {
    setSendRequest(true);
  };
  const handleCancel = () => {
    closeModal();
  };

  //모달 창이 열리거나 닫힐 때 input창 데이터 초기화
  useEffect(() => {
    setName("");
    setSendRequest(false);
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      style={name === "" ? HospiModalStyles : HospiOpenModalStyles}
    >
      <CancelBtn onClick={handleCancel} />

      {sendRequest === true ? (
        <SubmitContext name={name}></SubmitContext>
      ) : (
        <div>
          {name === "" ? (
            <ModalTitle title="변경 할 산부인과를 검색해주세요"></ModalTitle>
          ) : (
            <ModalTitle title="산부인과를 변경하시겠습니까?"></ModalTitle>
          )}
          <InputHospital context={name} setContext={setName}></InputHospital>
          {name === "" ? null : <SubmitBtn onClick={handleSubmit} />}
        </div>
      )}
    </Modal>
  );
};

export const InfoModal = ({
  isOpen,
  closeModal,
  openModel,
}: InfoModalProps) => {
  const [email, setEmail] = useState("rudgml742@gmail.com");
  const [updateEmail, setUpdateEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [updatePwd, setUpdatePwd] = useState("");
  const [checkPwd, setCheckPwd] = useState("");

  const [isShown, setIsShown] = useState(false);

  const handleSubmit = () => {
    alert(checkPwd);
    closeModal();
    openModel();
  };
  const handleEmailClick = () => {
    alert(updateEmail);
  };
  const handleVeriClick = () => {
    alert(verificationCode);
  };
  const handleShow = () => {
    setIsShown(!isShown);
  };

  useEffect(() => {
    setIsShown(false);
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      style={isShown === false ? InfoModalStyles : InfoOpenModalStyles}
    >
      <CancelBtn onClick={closeModal} />

      <ModalTitle title="변경 할 정보를 입력해주세요."></ModalTitle>
      <InfoLayout>
        <EmailInfo email={email} handleShow={handleShow}></EmailInfo>
        {isShown === false ? (
          ""
        ) : (
          <div
            css={css`
              margin-bottom: ${theme.spacing.xxl};
            `}
          >
            <InputWithBtn
              context="변경 이메일"
              btnContext="인증하기"
              state={updateEmail}
              setState={setUpdateEmail}
              onClick={handleEmailClick}
            ></InputWithBtn>
            <InputWithBtn
              context="인증 번호"
              btnContext="인증확인"
              state={verificationCode}
              setState={setVerificationCode}
              onClick={handleVeriClick}
            ></InputWithBtn>
          </div>
        )}
        <InputPwd context="새 비밀번호" setPwd={setUpdatePwd}></InputPwd>
        <InputPwd context="새 비밀번호 확인" setPwd={setCheckPwd}></InputPwd>
      </InfoLayout>

      <SubmitBtn onClick={handleSubmit} />
    </Modal>
  );
};

export const UpdatedModal = ({ isOpen, closeModal }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} className="modal" style={updatedModalStyles}>
      <CancelBtn onClick={closeModal} />
      <b>정보</b>를 <b>변경</b>했습니다.
    </Modal>
  );
};
