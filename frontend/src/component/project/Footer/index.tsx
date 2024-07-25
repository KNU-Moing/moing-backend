import { Overlay, Telephone, PinkContainer } from "./component";
import footerlogo from "../../../assets/footerLogo.png";

const Footer = () => {
  const contents = [
    { top: "대표이사 사장 유경빈", bottom: "용인 강남대학교" },
    {
      top: "사업등록번호 12394712",
      bottom: "통신판매업 신고번호 293123",
    },
    {
      top: "사업등록번호 12394712",
      bottom: "통신판매업 신고번호 293123",
    },
    {
      top: "사업등록번호 12394712",
      bottom: "통신판매업 신고번호 293123",
    },
  ];
  return (
    <div>
      <Overlay>
        <img src={footerlogo} alt="footerLogo" width="110rem"></img>
        <Telephone></Telephone>
        {contents.map((content, index) => (
          <PinkContainer
            key={index}
            topContent={content.top}
            bottomContent={content.bottom}
          ></PinkContainer>
        ))}
      </Overlay>
    </div>
  );
};

export default Footer;
