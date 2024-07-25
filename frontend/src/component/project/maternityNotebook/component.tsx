import theme from "../../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Overlay = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      padding-top: 24vh;
    `}
  >
    {children}
  </div>
);

export const Category = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      padding-left: 6.4vw;
    `}
  >
    {children}
  </div>
);

export const ContextOverlay = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      padding-left: 8vw;
    `}
  >
    {children}
  </div>
);

export const CategoryButton = ({
  clicked,
  content,
  onClick,
}: {
  clicked: boolean;
  content: string;
  onClick: () => void;
}) => (
  <button
    css={css`
    border: none;
    background-color: #FFFFFF;
    padding: ${theme.spacing.md};
    color: ${theme.palette.gray[600]};
    font-size: ${theme.typography.body4};
    font-weight: 
        ${
          clicked
            ? theme.typography.body4Bold.fontWeight
            : theme.typography.body4.fontWeight
        }};
    `}
    onClick={onClick}
  >
    {content}
  </button>
);

export const TitleContent = ({ content }: { content: string }) => {
  return (
    <div
      css={css`
        padding-top: 1.2rem;
        flex-grow: 8;
        ${theme.typography.body4Bold};
      `}
    >
      {content}
    </div>
  );
};
