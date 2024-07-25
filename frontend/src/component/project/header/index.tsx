import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { StyledHeader, LeftHeader, NavMenu, RightHeader } from "./component";

const Header: React.FC = () => {
  // 상태 변수 `isToggleOpen`을 초기값 `false`로 설정하고 업데이트하는 함수 `setIsToggleOpen`을 생성
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);

  // 토글 버튼을 클릭할 때 호출되는 함수
  const handleToggleOpen = () => {
    // `isToggleOpen`의 상태를 반전시킴 (true가 false로, false가 true로)
    setIsToggleOpen(!isToggleOpen);
  };

  // Header 컴포넌트의 JSX 렌더링 부분
  return (
    <StyledHeader>
      {/* 왼쪽 헤더 영역 */}
      <LeftHeader />

      {/* 네비게이션 메뉴 컴포넌트. `isToggleOpen` 상태를 전달하여 메뉴 열기/닫기 상태를 제어 */}
      <NavMenu isToggleOpen={isToggleOpen} />

      {/* 오른쪽 헤더 영역 */}
      <RightHeader />

      {/* 메뉴 토글 버튼이며, 반응형 구현 때 사용할 예정/ 클릭 이벤트가 발생하면 `handleToggleOpen` 함수를 호출 */}
      <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
    </StyledHeader>
  );
};

export default Header;
