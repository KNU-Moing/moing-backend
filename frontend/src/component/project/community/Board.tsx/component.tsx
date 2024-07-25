import { ContentBoxLayer } from "../../../emotion/component";
import { Content } from "../component";
import theme from "../../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import searchIcon from "../../../../assets/mainSearch.png";
import { GraphBtnType } from "../../maternityNotebook/notebook";

export const ContentBox = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <ContentBoxLayer
      title=""
      styleFlex="block"
      styleWidth="75rem"
      styleHeight="34vh"
    >
      <div
        css={css`
          margin-left: ${theme.spacing.lg};
        `}
      >
        <Content content={title} isBold={true}></Content>
        <Content content={content} isBold={false}></Content>
      </div>
    </ContentBoxLayer>
  );
};

export const SearchButton = () => (
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
    onClick={() => alert("글쓰기 페이지 이동")}
  >
    <div
      css={css`
        padding: 1.2rem 0.2rem 0 0;
      `}
    >
      검색
    </div>
    <img
      src={searchIcon}
      css={css`
        margin-top: 1.3rem;
        margin-left: 0.2rem;
        height: 1.2rem;
      `}
    ></img>
  </button>
);

export const GraphButton = ({
  content,
  setCategory,
}: {
  content: GraphBtnType;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleGraph = () => {
    setCategory(content.title);
  };
  return (
    <button
      css={css`
        border: none;
        background-color: #fff;
        margin: ${theme.spacing.md} ${theme.spacing.sm};
        padding-top: 1.2rem;
        color: ${theme.palette.gray[600]};
        font-size: ${theme.typography.body4.fontSize};
        font-weight: ${content.checked
          ? theme.typography.body4Bold.fontWeight
          : theme.typography.body4.fontWeight};
      `}
      onClick={handleGraph}
    >
      {content.title}
    </button>
  );
};
