import theme from "../../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { DiaryType } from "./index";
import writeIcon from "../../../../assets/DiaryWriteIcon.png";
import { useNavigate } from "react-router";

export const TitleBar = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      width: 90%;
      display: flex;
      padding: 0 0 ${theme.spacing.sm} 0;
      color: ${theme.palette.gray[600]};
    `}
  >
    {children}
  </div>
);
export const CategoryContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div
    css={css`
      display: flex;
      justify-content: flex-start;
      flex-grow: 9;
    `}
  >
    {children}
  </div>
);

export const WriteButton = () => {
  const navigate = useNavigate();
  return (
    <button
      css={css`
        display: flex;
        align-items: center;
        border: none;
        background-color: #ffffff;
        padding: 0 ${theme.spacing.xs};
        color: ${theme.palette.gray[600]};
        font: ${theme.typography.body4};
      `}
      onClick={() => navigate("/diary/write")}
    >
      <div
        css={css`
          padding: 1.2rem 0.2rem 0 0;
        `}
      >
        글쓰기
      </div>

      <img
        src={writeIcon}
        css={css`
          margin-top: 1.3rem;
          height: 1rem;
        `}
      ></img>
    </button>
  );
};

/*
*
커스텀 select
*
*/
export const CustomSelect = ({
  setState,
  selected,
  sortList,
}: {
  setState: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
  sortList: string[];
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div
      css={css`
        padding-top: 1.2rem;
      `}
    >
      <SelectBtn onClick={handleClick}>
        <RiArrowDropDownLine></RiArrowDropDownLine>
        <div
          css={css`
            margin-left: ${theme.spacing.xxs};
          `}
        >
          {selected}
        </div>
      </SelectBtn>
      <SelectUl isShown={isOpened}>
        {sortList.map((item) => (
          <SelectLi value={item} setState={setState}></SelectLi>
        ))}
      </SelectUl>
    </div>
  );
};
const SelectBtn = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    css={css`
      width: 8rem;
      display: flex;
      align-items: center;
      border: none;
      background-color: #ffffff;
      color: ${theme.palette.gray[600]};
      font-size: ${theme.typography.body4.fontSize};
      font-weight: ${theme.typography.body4.fontWeight};
    `}
    onClick={onClick}
  >
    {children}
  </button>
);
const SelectUl = ({
  children,
  isShown,
}: {
  children: React.ReactNode;
  isShown: boolean;
}) => (
  <ul
    css={css`
      list-style-type: none;
      padding: 0;
      margin: 4px 0 0 0;
      position: absolute;
      cursor: pointer;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      display: ${isShown ? "inline-block" : "none"};
      background-color: #fff;
      font-size: ${theme.typography.body4.fontSize};
      font-weight: ${theme.typography.body4.fontWeight};
    `}
  >
    {children}
  </ul>
);
const SelectLi = ({
  value,
  setState,
}: {
  value: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleChoose = () => {
    setState(value);
  };
  return (
    <li
      css={css`
        padding: 0.2rem 0.5rem 0.2rem 2rem;
        &:hover {
          background-color: ${theme.palette.gray[200]};
        }
      `}
      onClick={handleChoose}
    >
      {value}
    </li>
  );
};

/*
*
일기 목록
*
*/
export const DiaryOverlay = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      width: 90%;
      display: flex;
      padding: ${theme.spacing.sm} 0;
      color: ${theme.palette.gray[600]};
      flex-wrap: wrap;
      gap: ${theme.spacing.lg};
      ${theme.typography.body4Bold};
    `}
  >
    {children}
  </div>
);

export const DiaryBox = ({ diary }: { diary: DiaryType }) => {
  const navigate = useNavigate();
  const handleNavi = () => {
    navigate(`/diary/${diary.index}`);
  };
  return (
    <div
      css={css`
        padding: ${theme.spacing.md};
        width: 36vw;
        border-radius: 10px;
        border: 1px solid ${theme.palette.pink[100]};
      `}
      onClick={handleNavi}
    >
      <DiaryImg src={diary.img}></DiaryImg>
      <DiaryTitle week={diary.week}></DiaryTitle>
      <DiaryContent content={diary.content}></DiaryContent>
    </div>
  );
};
const DiaryImg = ({ src }: { src: string }) => {
  return (
    <img
      css={css`
        width: 100%;
      `}
      src={src}
    ></img>
  );
};
const DiaryTitle = ({ week }: { week: string }) => {
  return (
    <div
      css={css`
        width: 100%;
        margin: ${theme.spacing.xs} 0;
      `}
    >
      {week}
    </div>
  );
};
const DiaryContent = ({ content }: { content: string }) => {
  return (
    <div
      css={css`
        width: 100%;
        margin: ${theme.spacing.xs} 0 0 0;
        ${theme.typography.body5};
      `}
    >
      {content.length < 130 ? content : content.slice(0, 180) + "..."}
    </div>
  );
};
