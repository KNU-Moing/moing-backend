import theme from "../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import nextIcon from "../../../assets/paginationNextBtn.png";
import beforeIcon from "../../../assets/paginationBeforeBtn.png";

export const Overlay = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex-wrap: wrap;
      gap: ${theme.spacing.sm};
      padding-top: 24vh;
      padding-bottom: 4vh;
      padding-left: 8vw;
    `}
  >
    {children}
  </div>
);

/** 추천 토픽 레이아웃 */
export const RecommendLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 78vh;
      width: 90%;
      text-align: center;
    `}
  >
    <TopicBox> {children}</TopicBox>
    <div
      css={css`
        width: 21vw;
        font-size: ${theme.typography.body6};
      `}
    >
      임신 중기의 시작! 다른 예비엄마들은 이렇게 검색했어요 누르면 관련 정보
      내용들이 있어요!
    </div>
  </div>
);
export const TopicBox = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      height: 62vh;
      background-color: ${theme.palette.gray[200]};
      position: relative;
    `}
  >
    {children}
  </div>
);

/** 커뮤니티 상단 헤더, 타이틀 */
export const TitleBar = () => (
  <div
    css={css`
      display: flex;
      position: relative;
      justify-content: center;
      width: 90%;
      margin: ${theme.spacing.sm} 0;
      font: ${theme.typography.body2};
    `}
  >
    쑥쑥이엄마의 고민을 덜어드릴게요
  </div>
);
export const TitleIcon = ({ styleRight }: { styleRight: string }) => (
  <button
    css={css`
      width: 2rem;
      height: 2rem;
      border: none;
      border-radius: 100%;
      margin: 0 ${theme.spacing.xxs};
      position: absolute;
      right: ${styleRight};
    `}
  ></button>
);
/** 세부적인 내용들을 담을 공간 */
export const Container = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      justify-content: center;
      margin-top: -${theme.spacing.xxl};
      display: flex;
      flex-wrap: wrap;
    `}
  >
    {children}
  </div>
);
/** 커뮤니티 게시물 등 세부 내용 */
export const CommunityContent = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <div
    css={css`
      width: 29vw;
      color: ${theme.palette.gray[700]};
      padding: 1vh 4vw 1vh 7vw;
      font-size: ${theme.typography.body5};
    `}
  >
    {title}
    <div
      css={css`
        padding: 1vh 2.5vw;
        font-size: ${theme.typography.body6};
      `}
    >
      {content}
    </div>
  </div>
);

/** 공용 컴포넌트들 */
export const Content = ({
  content,
  isBold,
}: {
  content: string;
  isBold: boolean;
}) => {
  return (
    <div
      css={css`
        width: 65rem;
        ${isBold ? theme.typography.body4Bold : theme.typography.body4}
        padding: ${theme.spacing.xs} ${theme.spacing.sm} ${theme.spacing
          .sm} ${theme.spacing.xl};
      `}
    >
      {content}
    </div>
  );
};
export const BoxContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.xs};
      `}
    >
      {children}
    </div>
  );
};

export const PaginationBar = ({
  scrollTo,
  datasLength,
  endIndex,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: {
  scrollTo: number;
  datasLength: number;
  endIndex: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const canGoNext = datasLength > endIndex;
  const canGoPrevious = currentPage > 1;

  const totalPageCount = Math.ceil(datasLength / itemsPerPage);

  const scrollToTop = () => {
    window.scroll({
      top: scrollTo,
    });
  };

  return (
    <div
      css={css`
        margin-top: 6rem;
        display: flex;
        align-items: center;
        gap: ${theme.spacing.sm};
      `}
    >
      <MoveBtn
        onClick={() => {
          setCurrentPage(currentPage - 1);
          scrollToTop();
        }}
        disabled={canGoPrevious}
        imgSrc={beforeIcon}
      ></MoveBtn>

      {Array.from({ length: totalPageCount }).map((_, index) => (
        <button
          key={index + 1}
          onClick={() => {
            setCurrentPage(index + 1);
            scrollToTop();
          }}
          css={css`
            background: transparent;
            border: none;
            color: ${theme.palette.pink[100]};
            ${currentPage === index + 1
              ? theme.typography.body4Bold
              : theme.typography.body4};
            padding-bottom: ${theme.spacing.xxs};
          `}
        >
          {index + 1}
        </button>
      ))}

      <MoveBtn
        onClick={() => {
          setCurrentPage(currentPage + 1);
          scrollToTop();
        }}
        disabled={canGoNext}
        imgSrc={nextIcon}
      ></MoveBtn>
    </div>
  );
};
const MoveBtn = ({
  onClick,
  disabled,
  imgSrc,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  imgSrc: string;
}) => (
  <button
    css={css`
      background: transparent;
      border: none;
    `}
    onClick={onClick}
    disabled={!disabled}
  >
    <img src={imgSrc} alt="paginationNext" />
  </button>
);
