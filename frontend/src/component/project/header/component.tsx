import { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import theme from "../../../styles/theme";
import logo from "../../../assets/headerLogo.png";
import alarmIcon from "../../../assets/allim.png";
import QAIcon from "../../../assets/mainQApage.png";
import searchIcon from "../../../assets/mainSearch.png";
import myPageIcon from "../../../assets/mainMypage.png";

// 타입 선언
type NavMenuProps = {
  isToggleOpen: boolean;
};

const StyledHeader = styled.header`
  background-color: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 3.3125rem;

  .nav_logo {
    position: relative;
    left: 7.625rem;
  }

  .menuToggleBtn {
    display: none;
    color: #000;
    font-size: 0.9375rem;
    position: absolute;
    right: 1.25rem;
    top: 0.9375rem;
    cursor: pointer;
  }

  @media screen and (max-width: 48rem) {
    flex-direction: column;
    align-items: flex-start;

    .menuToggleBtn {
      display: block;
    }
  }
`;

const StyledLeftHeader = styled.div`
  position: relative;
  left: 7.625rem;
`;

const StyledNavMenu = styled.ul<NavMenuProps>`
  list-style: none;
  display: flex;
  position: absolute;
  left: 18.75rem;
  color: #000;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  li {
    margin-right: 5.5625rem;
    &:hover {
      cursor: pointer;
      background: rgba(255, 242, 242, 0.5);
      border-radius: 0.25rem;
    }
  }

  .nav-menu-list {
    text-decoration: none;
    color: #000;
    display: block;
    padding: 0.625rem 0.625rem;
    font-family: Pretendard;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  @media screen and (max-width: 48rem) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    color: #808080;
    align-items: center;
    width: 100%;
    margin-top: 0.3125rem;

    li {
      margin-right: 0;
      margin-bottom: 0.625rem;
    }
  }
`;

const StyledRightHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.625rem;
  position: absolute;
  right: 8.1875rem;
  gap: 1.85rem;
  .header-button {
    cursor: pointer;

    img {
      width: 0.8125rem;
      height: 0.875rem;
    }
  }
`;

/*
알림 Modal Part
*/
const ModalBox = styled.div`
  background: white;
  width: 21.2rem;
  height: 27rem;
  border: 0.08rem solid ${theme.palette.pink[600]};
  border-radius: 1.0625rem;
  position: absolute;
  top: -13.6rem;
  right: 8.5rem;
  transform: translate(15%, 55%);
  box-shadow: 0 1px 3px ${theme.palette.pink[600]};
  padding: 1.5rem 1.2rem 1.5rem 1.5rem;
  z-index: 3;
  &:hover {
    cursor: default;
  }

  &::after {
    border-color: ${theme.palette.gray.white} transparent;
    border-style: solid;
    border-width: 0 9.5px 16px 9.5px;
    content: "";
    display: block;
    position: absolute;
    left: 19.9rem;
    top: -1rem;
    width: 0;
    z-index: 1;
  }

  &::before {
    border-color: ${theme.palette.pink[600]} transparent;
    border-style: solid;
    border-width: 0 9.5px 16px 9.5px;
    content: "";
    display: block;
    position: absolute;
    left: 19.9rem;
    top: -1.1rem;
    width: 0;
    z-index: 0;
  }
`;
const ModalTitle = styled.div`
  ${theme.typography.body4Bold}
  padding: 0 0.5rem 0.5rem 0.5rem;
`;
const NoticeContainer = styled.div`
  height: 26rem;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 2px;
    height: 0.4rem;
    margin-bottom: ${theme.spacing.sm};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: ${theme.palette.pink[700]};
  }
`;
const NoticeLayout = styled.div`
  padding: 0.6rem 0;
  display: flex;
  gap: 0.75rem;
  &:hover {
    cursor: pointer;
  }
`;
const NoticeImg = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  background-color: ${theme.palette.pink[100]};
  border-radius: 100%;
`;
const NoticeTitle = styled.div`
  font-weight: Bold;
  font-size: 0.85rem;
  margin-bottom: 0.2rem;
`;
const NoticeContent = styled.div`
  font-size: 0.7rem;
  color: ${theme.palette.pink[300]};
`;
const ModalNotice = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <NoticeLayout
      onClick={() => {
        alert("어디로 이동할까유..");
      }}
    >
      <NoticeImg></NoticeImg>
      <div style={{ width: "82%", marginTop: "-0.2rem" }}>
        <NoticeTitle>{title}</NoticeTitle>
        <NoticeContent>{content}</NoticeContent>
      </div>
    </NoticeLayout>
  );
};

const Tooltip = ({
  children,
  message,
  isModalOpen,
}: {
  children: React.ReactNode;
  message: string;
  isModalOpen: boolean;
}) => {
  return (
    <Container isModalOpen={isModalOpen}>
      {children}
      <div className="tooltip">{message}</div>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  display: inline-block;

  &:hover > .tooltip,
  &:active > .tooltip {
    ${({ isModalOpen }: { isModalOpen: boolean }) =>
      isModalOpen ? `` : `display: block`};
  }

  .tooltip {
    white-space: pre-line;
    display: none;
    position: absolute;
    bottom: -0.4rem;
    background-color: ${theme.palette.gray.white};
    border: ${theme.palette.pink[600]} solid 1px;
    border-radius: 20px;
    color: ${theme.palette.pink[100]};
    box-shadow: 0 1px 3px ${theme.palette.pink[600]};
    ${theme.typography.body5Bold};
    height: auto;
    letter-spacing: -0.25px;
    margin-top: 6.8px;
    padding: 6px 13px;
    width: max-content;
    z-index: 100;
    transform: translate(-44%, 110%);
  }

  // 말풍선 테두리와 꼬리를 위한 before, after
  .tooltip::after {
    border-color: ${theme.palette.gray.white} transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: "";
    display: block;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: -7px;
    width: 0;
    z-index: 1;
  }

  .tooltip::before {
    border-color: ${theme.palette.pink[600]} transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: "";
    display: block;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: -8px;
    width: 0;
    z-index: 0;
  }
`;

const LeftHeader = () => {
  return (
    <StyledLeftHeader>
      <Link to={"/"} className="nav-logo-link">
        <img src={logo} alt="헤더로고" />
      </Link>
    </StyledLeftHeader>
  );
};

const NavMenu = ({ isToggleOpen }: NavMenuProps) => {
  return (
    <StyledNavMenu isToggleOpen={isToggleOpen}>
      <li>
        <Link to={"/notebook"} className="nav-menu-list">
          산모수첩/일기
        </Link>
      </li>
      <li>
        <Link to={"/community"} className="nav-menu-list">
          커뮤니티
        </Link>
      </li>
      <li>
        <Link to={"/supplies"} className="nav-menu-list">
          산모용품
        </Link>
      </li>
      <li>
        <Link to={"/cook"} className="nav-menu-list">
          조리원신청
        </Link>
      </li>
    </StyledNavMenu>
  );
};

const RightHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [notices, setNotices] = useState([
    {
      title: "산모수첩이 업데이트 되었습니다.",
      content: "23년10월2일 산모수첩이 업데이트 되었습니다. 지금 확인해보세요!",
    },
    {
      title: "산모수첩이 업데이트 되었습니다.",
      content: "23년10월2일 산모수첩이 업데이트 되었습니다. 지금 확인해보세요!",
    },
    {
      title: "산모수첩이 업데이트 되었습니다.",
      content: "23년10월2일 산모수첩이 업데이트 되었습니다. 지금 확인해보세요!",
    },
    {
      title: "산모수첩이 업데이트 되었습니다.",
      content: "23년10월2일 산모수첩이 업데이트 되었습니다. 지금 확인해보세요!",
    },
    {
      title: "산모수첩이 업데이트 되었습니다.",
      content: "23년10월2일 산모수첩이 업데이트 되었습니다. 지금 확인해보세요!",
    },
    {
      title: "산모수첩이 업데이트 되었습니다.",
      content: "23년10월2일 산모수첩이 업데이트 되었습니다. 지금 확인해보세요!",
    },
    {
      title: "산모수첩이 업데이트 되었습니다.",
      content: "23년10월2일 산모수첩이 업데이트 되었습니다. 지금 확인해보세요!",
    },
  ]);

  return (
    <StyledRightHeader>
      <div className="header-button" onClick={toggleModal}>
        <Tooltip message="알림" isModalOpen={isModalOpen}>
          <img src={alarmIcon} alt="Allim" />
        </Tooltip>
        {isModalOpen && (
          <ModalBox className="modal">
            {/* 모달 내용 */}
            <ModalTitle>알림</ModalTitle>
            <NoticeContainer>
              {notices.map((notice, index) => (
                <ModalNotice
                  key={index}
                  title={notice.title}
                  content={notice.content}
                ></ModalNotice>
              ))}
            </NoticeContainer>
          </ModalBox>
        )}
      </div>
      <Tooltip message="오늘의 질문" isModalOpen={false}>
        <Link to="/question" className="header-button">
          <img src={QAIcon} alt="Question" />
        </Link>
      </Tooltip>
      <Tooltip message="통합 검색" isModalOpen={false}>
        <Link to="/search" className="header-button">
          <img src={searchIcon} alt="Search" />
        </Link>
      </Tooltip>
      <Tooltip message="마이페이지" isModalOpen={false}>
        <Link to="/mypage" className="header-button">
          <img src={myPageIcon} alt="Mypage" />
        </Link>
      </Tooltip>
    </StyledRightHeader>
  );
};

export { StyledHeader, LeftHeader, NavMenu, RightHeader };
