import styled from "@emotion/styled";

export const ConsiderTitle = styled.p`
  margin-left: 15%;
  margin-top: 1.25rem;
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ConsiderContainer = styled.div``;

export const ConsiderQ = styled.div`
  margin-left: 15%;
  text-align: left;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  .QText {
    color: #84BDFF;
    font-family: Jalnan OTF;
    font-size: 73px;
    font-weight: 700;
  }

  span {
    font-weight: bold;
    background: linear-gradient(to top, #D0E6FF 60%, transparent 50%);
    display: inline-block;
  }
`;

export const ConsiderA = styled.div`
  margin-right: 15%;
  margin-top: -8%;
  text-align: right;

  .AText {
    margin-top: 100px;
    margin-bottom: 5px;
    color: #FF9494;
    font-family: Jalnan OTF;
    font-size: 73px;
    font-weight: 700;
  }

  .ConsiderAText {
    display: flex;
    text-align: right;
    justify-content: right;

  }
  .considerP{
    margin-top: 65px;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

  }

  .considerLogo {
    margin-right: 10px;
  }
`;
