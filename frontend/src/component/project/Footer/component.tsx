import theme from "../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Overlay = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      margin-top: 7rem;
      border-top: 1px solid ${theme.palette.pink[100]};
      padding: 1.4rem 0rem 1rem 7.5rem;
      display: flex;
      gap: ${theme.spacing.xs};
    `}
  >
    {children}
  </div>
);

export const Telephone = () => (
  <div
    css={css`
      margin: 0.2rem 0.7rem 0.2rem 0.2rem;
    `}
  >
    <Content
      content="이용 약관"
      styleColor={theme.palette.gray.black}
      isBold={true}
    ></Content>
    <Content
      content="고객센터 1234-1234 ( 평일 오전 9시 ~ 오후 6시 )"
      styleColor={theme.palette.gray.black}
      isBold={false}
    ></Content>
    <Content
      content="의료진 고객센터 1234-1234 ( 평일 오전 9시 ~ 오후 6시 )"
      styleColor={theme.palette.gray.black}
      isBold={false}
    ></Content>
  </div>
);

export const PinkContainer = ({
  topContent,
  bottomContent,
}: {
  topContent: string;
  bottomContent: string;
}) => {
  return (
    <div
      css={css`
        margin: 1.4rem 2.8rem 0.2rem 1.4rem;
      `}
    >
      <Content
        content={topContent}
        styleColor={theme.palette.pink[100]}
        isBold={false}
      ></Content>
      <Content
        content={bottomContent}
        styleColor={theme.palette.pink[100]}
        isBold={false}
      ></Content>
    </div>
  );
};

const Content = ({
  content,
  styleColor,
  isBold,
}: {
  content: string;
  styleColor: string;
  isBold: boolean;
}) => {
  return (
    <div
      css={css`
        color: ${styleColor};
        font-weight: ${isBold
          ? theme.typography.body6Bold.fontWeight
          : theme.typography.body6.fontWeight};
        font-size: 0.7rem;
        padding: 0.18rem;
      `}
    >
      {content}
    </div>
  );
};
