import React, { useState, useEffect, useRef } from "react";
import Branding from "./mainComponent/Branding/branding";
import { Weekhelp } from "./mainComponent/Weekhelp/weekhelp";
import { Intro } from "./mainComponent/Intro/intro";
import { Consider } from "./mainComponent/Consider/consider";
import { Howwecanhelp } from "./mainComponent/Howwecanhelp/howwecanhelp";
import { MainFooter } from "./mainComponent/Mainfooter/mainfooter";

export const Main = () => {
  // 현재 섹션을 관리하는 state
  const [currentSection, setCurrentSection] = useState(0);
  // 모든 섹션 컴포넌트를 배열로 저장
  const sections = [
    <Branding />,
    <Weekhelp />,
    <Intro />,
    <Consider />,
    <Howwecanhelp />,
    <MainFooter />,
  ];
  // 각 섹션의 Ref를 저장하는 배열
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  // sectionRefs 배열 초기화
  useEffect(() => {
    sectionRefs.current = sections.map(() => null);
  }, [sections]);

  // 마우스 휠 이벤트 처리
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0 && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    } else if (e.deltaY > 0 && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
    e.preventDefault();
  };

  // 한 번에 표시할 섹션 수
  const sectionsPerPage = 1;
  // 스크롤 로딩 임계값
  const threshold = 0.9;

  // 더 많은 섹션 로딩 함수
  const loadMoreSections = () => {
    const lastSectionIndex = currentSection + sectionsPerPage;
    if (lastSectionIndex >= sections.length) {
      return;
    }
    setCurrentSection(lastSectionIndex);
  };

  // 스크롤 이벤트 리스너 추가
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // currentSection 변경 시 해당 섹션으로 스크롤
  useEffect(() => {
    if (sectionRefs.current[currentSection]) {
      sectionRefs.current[currentSection]?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentSection]);

  // 스크롤 이벤트 처리 함수
  const handleScroll = () => {
    const scrollHeight = window.document.documentElement.scrollHeight;
    const scrollTop = window.document.documentElement.scrollTop;
    const clientHeight = window.document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight * threshold) {
      loadMoreSections();
    }
  };

  return (
    <div>
      <div
        onWheel={handleWheel}
        style={{ height: "100vh", overflow: "hidden" }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            style={{
              height: "100vh",
              width: "100%",
              position: "relative",
              transform: `translateY(-${100 * currentSection}%)`,
              transition: "transform ease-in-out 1s",
            }}
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
};