import questionIcon from "../../../assets/myPageQuestionIcon.png";
import theme from "../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ButtonProp {
  onClick: () => void;
}
interface EmailInfoProps {
  email: string;
  handleShow: () => void;
}
interface InputPwdProps {
  context: string;
  setPwd: React.Dispatch<React.SetStateAction<string>>;
}
interface InputWithBtnProps {
  context: string;
  btnContext: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  onClick: () => void;
}
export const InfoLayout = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      margin: ${theme.spacing.xxl} 0 ${theme.spacing.md} 0;
    `}
  >
    {children}
  </div>
);
export const ModalTitle = ({ title }: { title: string }) => {
  return (
    <div
      css={css`
        margin-bottom: ${theme.spacing.md};
      `}
    >
      {title}
    </div>
  );
};

export const CancelBtn = ({ onClick }: ButtonProp) => {
  return (
    <button
      onClick={onClick}
      css={css`
        position: absolute;
        top: ${theme.spacing.md};
        right: ${theme.spacing.md};
        border: none;
        background-color: ${theme.palette.gray.white};
      `}
    >
      <img src="/img/exitIcon.png" width="20rem" height="20rem"></img>
    </button>
  );
};
export const SubmitBtn = ({ onClick }: ButtonProp) => {
  return (
    <button
      onClick={onClick}
      css={css`
        border: none;
        border-radius: 40px;
        width: 10rem;
        height: 2.5rem;
        font-size: 1rem;
        color: ${theme.palette.gray.white};
        background-color: ${theme.palette.pink[100]};
        margin-top: ${theme.spacing.xs};
      `}
    >
      변경하기
    </button>
  );
};

const InfoContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      font-size: ${theme.font.xs};
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: ${theme.spacing.sm};
    `}
  >
    {children}
  </div>
);

const InputContainer = ({
  styleWidth,
  children,
}: {
  styleWidth: string;
  children: React.ReactNode;
}) => (
  <div
    css={css`
      height: 2.5rem;
      width: ${styleWidth};
      border-radius: 20px;
      border: 1px solid ${theme.palette.pink[100]};
      background-color: ${theme.palette.gray.white};
      display: flex;
      justify-content: space-between;
      padding: 0 ${theme.spacing.sm};
    `}
  >
    {children}
  </div>
);

const InputText = ({
  value,
  onChange,
}: {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => (
  <input
    type="text"
    onChange={onChange}
    value={value}
    css={css`
      height: 90%;
      width: 73%;
      background-color: ${theme.palette.gray.white};
      color: ${theme.palette.pink[100]};
      border: none;

      &:focus {
        outline: none;
      }
    `}
  ></input>
);

const InputBtn = ({
  onClick,
  context,
}: {
  onClick: () => void;
  context: string;
}) => (
  <button
    onClick={onClick}
    css={css`
      background-color: ${theme.palette.gray.white};
      margin-top: 0.3rem;
      padding-left: ${theme.spacing.xs};
      height: 1.8rem;
      border: none;
      border-left: solid 0.5px ${theme.palette.pink[200]};
      color: ${theme.palette.pink[100]};
      fontsize: ${theme.font.sm};
    `}
  >
    {context}
  </button>
);

export const InputPwd = ({ context, setPwd }: InputPwdProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPwd(e.target.value);
  };

  return (
    <InfoContainer>
      {context}
      <input
        type="password"
        onChange={onChange}
        css={css`
          width: 18vw;
          height: 2.5rem;
          border-radius: 20px;
          background-color: ${theme.palette.gray.white};
          color: ${theme.palette.pink[100]};
          border: 1px solid ${theme.palette.pink[100]};
          padding: 0 ${theme.spacing.sm};
          &:focus {
            outline: none;
          }
        `}
      ></input>
    </InfoContainer>
  );
};
export const EmailInfo = ({ email, handleShow }: EmailInfoProps) => {
  return (
    <InfoContainer>
      이메일
      <InputContainer styleWidth="24vw">
        <InputText value={email} onChange={() => {}}></InputText>
        <InputBtn onClick={handleShow} context="변경"></InputBtn>
      </InputContainer>
    </InfoContainer>
  );
};

export const InputWithBtn = ({
  context,
  btnContext,
  state,
  setState,
  onClick,
}: InputWithBtnProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setState(e.target.value);
  };

  return (
    <InfoContainer>
      {context}
      <InputContainer styleWidth="22vw">
        <InputText value={state} onChange={onChange}></InputText>
        <InputBtn onClick={onClick} context={btnContext}></InputBtn>
      </InputContainer>
    </InfoContainer>
  );
};

export const InputHospital = ({
  context,
  setContext,
}: {
  context: string;
  setContext: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setContext(e.target.value);
  };
  return (
    <div
      css={css`
        width: 30vw;
        height: 2.5rem;
        display: flex;
        justify-content: space-between;
        background-color: ${theme.palette.gray.white};
        margin-top: ${theme.spacing.sm};
        margin-bottom: ${theme.spacing.sm};
        padding: 0 ${theme.spacing.xl};
        border-radius: 20px;
        border: 1.5px solid ${theme.palette.pink[100]};
        position: relative;
      `}
    >
      <input
        type="text"
        onChange={onChange}
        css={css`
          width: 100%;
          height: 90%;
          border: none;
          text-align: center;
          font-size: ${theme.font.xxs};
          color: ${theme.palette.pink[100]};
          background-color: ${theme.palette.gray.white};
          &:focus {
            outline: none;
          }
        `}
      ></input>
      {context === "" ? (
        <img
          src={questionIcon}
          width="17rem"
          height="22rem"
          css={css`
            margin-top: 0.55rem;
            position: absolute;
            right: 3rem;
          `}
        ></img>
      ) : (
        ""
      )}
    </div>
  );
};

export const SubmitContext = ({ name }: { name: string }) => {
  return (
    <p
      css={css`
        margin-top: ${theme.spacing.xl};
      `}
    >
      <b>{name}</b>에 요청을 보냈습니다
      <p
        css={css`
          margin-top: ${theme.spacing.sm};
          ${theme.typography.body4};
        `}
      >
        <b>병원 방문 후 인증</b> 후에 <b>변경</b>이 <b>완료</b>됩니다
      </p>
    </p>
  );
};
