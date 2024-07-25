import styled from "@emotion/styled";

export const BrandingLeft = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 250px;
  top: 250px;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  .brandingLogo{
    width: 329px;
    height: 260px;
    flex-shrink: 0;
    margin-left:30px;
  }
  
`;

export const CustomButton = styled.button`
    width: 282px;
    height: 58px;
    position: absolute;
    left: 320px;
    top: 550px;
    border: 1px solid #FF9494;
    border-radius: 87px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #FF9494;
    margin-top: 5px; 
    background-color: transparent;
    &:hover {
      background-color: #FFEBEB;
    }
`;

export const BrandingRight = styled.div`
z-index: -1;
.ssugssugImg{
  width: 529px;
  height: 547px;
  position: absolute;
  bottom: 0;
  right: 130px;
  z-index: -1;
}
 `;


