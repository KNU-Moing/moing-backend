import React, { useState } from "react";
import {
  Overlay,
  MyPageContainer,
  ProfileSection,
  ProfileBtn,
  Profile,
  PregancyPeriod,
  InfoContainer,
  InfoDetail,
  InfoProfile,
  ChangeButton,
  ProfileImg,
  InfoSection,
  InfoLayout,
  BodyCondition,
  UnderLine,
  TipTitle,
} from "./component";
import Footer from "../Footer";
import StyledHeader from "../header";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HospitalModal, UpdatedModal, InfoModal } from "./modal";
import theme from "../../../styles/theme";
import {
  ChartContent,
  HospitalVisitDay,
} from "../maternityNotebook/notebook/component";

export const MyPage = () => {
  const dummyImage = "http://via.placeholder.com/120x120";
  const dummyImage2 = "http://via.placeholder.com/180x180";
  const [isOpenHospital, setIsOpenedHospital] = useState(false);
  const [isOpenInfo, setIsOpenedInfo] = useState(false);
  const [isOpenUpdated, setIsOpenUpdated] = useState(false);

  const [username, setUsername] = useState("");
  const [partner, setPartner] = useState("");

  return (
    <div>
      <Overlay>
        <StyledHeader></StyledHeader>
        <ProfileSection>
          <Profile name="쑥쑥이 엄마" src={theme.palette.pink[400]}></Profile>
          <PregancyPeriod name="쑥쑥이" day={97} week={14}></PregancyPeriod>
          <Profile name="쑥쑥이 아빠" src={theme.palette.blue[200]}></Profile>
        </ProfileSection>

        <MyPageContainer title="내 정보" styleWidth="70%" styleDisplay="flex">
          <ProfileImg src={theme.palette.pink[400]} size="180px"></ProfileImg>

          <InfoLayout>
            <InfoProfile name="쑥쑥이엄마" day={97}></InfoProfile>
            <ProfileBtn onClick={() => alert("프로필 변경")}></ProfileBtn>

            <InfoContainer>
              <InfoSection left={true}>
                <InfoDetail title="보호자" context="쑥쑥이아빠">
                  {" "}
                </InfoDetail>
                <InfoDetail title="병원" context="가나다라산부인과">
                  <ChangeButton
                    onClick={() => setIsOpenedHospital(true)}
                  ></ChangeButton>
                </InfoDetail>
              </InfoSection>

              <InfoSection left={false}>
                <InfoDetail title="이메일" context="rudgml742@gmail.com">
                  {" "}
                </InfoDetail>
                <InfoDetail title="비밀번호 변경" context="">
                  <ChangeButton
                    onClick={() => setIsOpenedInfo(true)}
                  ></ChangeButton>{" "}
                </InfoDetail>
              </InfoSection>
            </InfoContainer>
          </InfoLayout>
        </MyPageContainer>

        <p
          style={{
            display: "flex",
            marginTop: theme.spacing.md,
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <MyPageContainer
            title="몸 상태"
            styleWidth="47%"
            styleDisplay="block"
          >
            <BodyCondition title="산모 정보" styleJustifyContent="flex-start">
              <ChartContent
                kind="산모 혈압"
                value="110"
                unit="mmlg"
              ></ChartContent>
              <ChartContent
                kind="산모 체중"
                value="65"
                unit="kg"
              ></ChartContent>
              <ChartContent
                kind="특별 검사"
                value="없음"
                unit=""
              ></ChartContent>
            </BodyCondition>
            <UnderLine></UnderLine>
            <BodyCondition title="태아 정보" styleJustifyContent="flex-start">
              <ChartContent
                kind="태아 크기"
                value="8.5"
                unit="cm"
              ></ChartContent>
              <ChartContent kind="태아 체중" value="40" unit="g"></ChartContent>
            </BodyCondition>
            <UnderLine></UnderLine>
            <BodyCondition title="다음 내원일" styleJustifyContent="center">
              <HospitalVisitDay
                year={20}
                month={0}
                day={2}
                days="목요일"
              ></HospitalVisitDay>
            </BodyCondition>
          </MyPageContainer>
          <MyPageContainer
            title="주차별 도움"
            styleWidth="47%"
            styleDisplay="block"
          >
            <TipTitle></TipTitle>
            <UnderLine></UnderLine>
          </MyPageContainer>
        </p>

        <HospitalModal
          isOpen={isOpenHospital}
          closeModal={() => setIsOpenedHospital(false)}
        ></HospitalModal>
        <InfoModal
          isOpen={isOpenInfo}
          closeModal={() => setIsOpenedInfo(false)}
          openModel={() => setIsOpenUpdated(true)}
        ></InfoModal>
        <UpdatedModal
          isOpen={isOpenUpdated}
          closeModal={() => setIsOpenUpdated(false)}
        ></UpdatedModal>
      </Overlay>
      <Footer></Footer>
    </div>
  );
};
