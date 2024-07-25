import theme from "../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ButtonProp {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Overlay = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
  >
    {children}
  </div>
);

export const MyPageContainer = ({
  styleWidth,
  styleDisplay,
  title,
  children,
}: {
  styleWidth: string;
  styleDisplay: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div
    css={css`
      width: ${styleWidth};
      position: relative;
    `}
  >
    <div
      css={css`
        ${theme.typography.body3Bold}
        padding: 0 ${theme.spacing.xl};
      `}
    >
      {title}
    </div>

    <div
      css={css`
        border: 1px solid ${theme.palette.pink[600]};
        box-shadow: 0 1px 3px ${theme.palette.pink[600]};
        width: 100%;
        padding: ${theme.spacing.sm};
        margin-top: ${theme.spacing.xs};
        border-radius: 20px;
        display: ${styleDisplay};
      `}
    >
      {children}
    </div>
  </div>
);

/*
*
상단 프로필
*
*/

export const ProfileSection = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      padding-top: 110px;
      display: flex;
      flex-direction: row;
      margin: 20px;
    `}
  >
    {children}
  </div>
);

export const Profile = (props: { name: string; src: string }) => {
  const size = "120px";
  return (
    <div
      css={css`
        text-align: center;
        margin: ${theme.spacing.md};
      `}
    >
      <ProfileImg src={props.src} size={size}></ProfileImg>
      <div>{props.name}</div>
    </div>
  );
};

export const ProfileImg = (props: { src: string; size: string }) => {
  /* 기존 img 코드 현재는 잠시 div 및 색상 대체
<img
      css={css`
        border-radius: 70%;
        margin: ${theme.spacing.sm};
        width: ${props.size};
        height: ${props.size};
      `}
      src={props.src}
      alt="프로필 사진"
    ></img> 
  */
  return (
    <div
      css={css`
        border-radius: 70%;
        background-color: ${props.src};
        margin: ${theme.spacing.sm};
        width: ${props.size};
        height: ${props.size};
      `}
    >
      {" "}
    </div>
  );
};
export const ProfileBtn = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      css={css`
        border: none;
        border-radius: 100%;
        width: 2.5rem;
        height: 2.5rem;
        background-color: ${theme.palette.pink[100]};
        position: absolute;
        bottom: 2.8rem;
        left: 10.8rem;
      `}
      onClick={onClick}
    >
      <img
        src="img\myPageWriteIcon.png"
        width="20rem"
        height="20rem"
        css={css`
          margin: 0.2rem 0 0 0.2rem;
        `}
      ></img>
    </button>
  );
};

export const PregancyPeriod = (props: {
  name: string;
  day: number;
  week: number;
}) => {
  return (
    <div
      css={css`
        text-align: center;
        font-size: 0.9rem;
      `}
    >
      <div
        css={css`
          padding-top: ${theme.spacing.xxxl};
        `}
      >
        {props.name}와 함께 한지
      </div>
      <div
        css={css`
          ${theme.typography.header2};
          padding-top: ${theme.spacing.xxs};
        `}
      >
        {props.day}일
      </div>
      <div>{props.week}주차 1일</div>
    </div>
  );
};

/*
*
내 정보
*
*/
export const InfoLayout = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      padding: ${theme.spacing.xl} 0 0 ${theme.spacing.sm};
    `}
  >
    {children}
  </div>
);

export const InfoContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      alignitems: center;
      justifycontent: flex-start;
    `}
  >
    {children}
  </div>
);

export const InfoSection = ({
  children,
  left,
}: {
  children: React.ReactNode;
  left: boolean;
}) => (
  <div
    css={css`
      width: 50%;
      padding-top: ${theme.spacing.xs};
      ${left ? ` border-right: solid 1px ${theme.palette.pink[100]};` : ""}
      margin-right: ${theme.spacing.md};
    `}
  >
    {children}
  </div>
);

export const InfoDetail = ({
  title,
  context,
  children,
}: {
  title: string;
  context: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      css={css`
        display: flex;
        margin-bottom: ${theme.spacing.sm};
        width: ${context === "" ? `21vw` : `25vw`};
        position: relative;
        ${theme.typography.body5};
      `}
    >
      <div
        css={css`
          ${theme.typography.body4Bold};
          width: 8vw;
        `}
      >
        {title}
      </div>
      {context}
      {children}
    </div>
  );
};

export const InfoProfile = (props: { name: string; day: number }) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        margin-bottom: ${theme.spacing.sm};
        ${theme.typography.body4}
      `}
    >
      <div
        css={css`
          ${theme.typography.body2Bold}
          margin-right: 2vw;
        `}
      >
        {props.name}
      </div>
      <div>14주차 1일 임신 초기</div>
    </div>
  );
};

export const ChangeButton = ({ onClick }: ButtonProp) => {
  return (
    <button
      css={css`
        border: none;
        background-color: #ffffff;
        height: ${theme.spacing.md};
        color: ${theme.palette.pink[100]};
        position: absolute;
        right: ${theme.spacing.md};
      `}
      onClick={onClick}
    >
      변경하기
    </button>
  );
};

/*
*
몸 상태
*/
export const BodyCondition = ({
  title,
  styleJustifyContent,
  children,
}: {
  title: string;
  styleJustifyContent: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      css={css`
        padding: ${theme.spacing.xs} 0 0 ${theme.spacing.xs};
        width: 95%;
      `}
    >
      <div
        css={css`
          ${theme.typography.body4Bold}
          padding: 0 ${theme.spacing.xs};
        `}
      >
        {title}
      </div>
      <div
        css={css`
          display: flex;
          justify-content: ${styleJustifyContent};
        `}
      >
        {children}
      </div>
    </div>
  );
};

export const UnderLine = () => {
  return (
    <hr
      css={css`
        border-top: 1px solid ${theme.palette.pink[100]};
        width: 100%;
      `}
    ></hr>
  );
};

/*
*
주차별 도움
*/
export const TipTitle = () => {
  return (
    <div
      css={css`
        color: ${theme.palette.pink[100]};
        text-align: center;
        ${theme.typography.body4}
        margin: ${theme.spacing.xxs} 0 ${theme.spacing.sm} 0;
      `}
    >
      임신 중기의 시작!
    </div>
  );
};
