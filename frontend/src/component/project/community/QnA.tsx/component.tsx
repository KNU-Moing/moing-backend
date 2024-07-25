import questionIcon from "../../../../assets/myPageQuestionIcon.png";
import theme from "../../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BackButton, ContentBoxLayer } from "../../../emotion/component";
import { Content } from "../component";

export const Overlay = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 24vh;
      padding-bottom: 4vh;
    `}
  >
    {children}
  </div>
);
export const InputSearch = ({
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
        width: 38vw;
        height: 3rem;
        display: flex;
        justify-content: space-between;
        text-align: center;
        border: 1px solid ${theme.palette.pink[100]};
        margin: ${theme.spacing.xxxl} 0;
        padding: 0.3rem ${theme.spacing.xl} 0 ${theme.spacing.xl};
        border-radius: 30px;
        position: relative;
      `}
    >
      <input
        type="text"
        onChange={onChange}
        placeholder="질문을 검색해주세요"
        css={css`
          width: 100%;
          height: 90%;
          border: none;
          font-size: ${theme.font.xxs};
          color: ${theme.palette.pink[100]};
          background-color: ${theme.palette.gray.white};
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: ${theme.palette.pink[100]};
          }
        `}
      ></input>
      <img
        src={questionIcon}
        width="17rem"
        height="22rem"
        css={css`
          padding-top: 0.7rem;
          position: absolute;
          right: 3rem;
        `}
      ></img>
    </div>
  );
};

export const HeaderWithBack = ({ context }: { context: string }) => {
  return (
    <div
      css={css`
        height: 5rem;
      `}
    >
      <BackButton></BackButton>
      <div
        css={css`
          position: absolute;
          top: 25.2%;
          left: 190px;
          ${theme.typography.body1}
        `}
      >
        {context}
      </div>
    </div>
  );
};
export const ButtonBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={css`
        width: 80%;
        display: flex;
        justify-content: flex-end;
        padding-bottom: ${theme.spacing.lg};
      `}
    >
      {children}
    </div>
  );
};

export const QnABox = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <ContentBoxLayer
      title=""
      styleFlex="block"
      styleWidth="75rem"
      styleHeight="34vh"
    >
      <ContentBox>
        Q.<Content content={question} isBold={true}></Content>
      </ContentBox>
      <ContentBox>
        A.<Content content={answer} isBold={false}></Content>
      </ContentBox>
    </ContentBoxLayer>
  );
};
export const ContentBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={css`
        display: flex;
        padding-left: ${theme.spacing.xxl};
        ${theme.typography.body1};
      `}
    >
      {children}
    </div>
  );
};
