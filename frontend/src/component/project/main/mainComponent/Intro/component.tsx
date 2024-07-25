import styled from '@emotion/styled';


export const PageContainer = styled.div`
  background: linear-gradient(180deg, rgba(255, 158, 158, 0.00) 2.13%, rgba(255, 158, 158, 0.09) 21.27%, rgba(255, 158, 158, 0.09) 74.03%, rgba(255, 158, 158, 0.00) 91.77%);
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  margin-left: 15%;
  margin-top: 1.25rem;
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: 15px;
  margin-left: 100px;
  
`;

export const IntroImgStyle = styled.div`
  display: flex;
  align-items: center; 
  margin-right: 100px;

  .introBook {
    width: 355px;
    height: 355px;
    flex-shrink: 0;
  }
  .introHat{
    width: 355px;
    height: 355px;
    flex-shrink: 0;
    
  }
  .introChart{
    width: 355px;
    height: 355px;
    flex-shrink: 0;

  }
`;

export const IntroTextStyle = styled.text`
h3{
color: #FF9494;
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal; 

}
h4{
color: #000;
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 600;
}
p{
color: #FF9494;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 300;
}

`;

export const ButtonContainer = styled.div`
display: flex;
justifyContent: center;
margin-left: 180px;
`;

export const Button = styled.button<{ active: boolean }>`
  width: 291px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 109px;
  background: ${(props) => (props.active ? '#FF9494' : 'transparent')};
  color: ${(props) => (props.active ? 'white' : '#FF9494')};
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 10px 20px;
  margin: 50px;
  margin-top: 80px;
  border: none;
  cursor: pointer;
`;


export function Content1() {
  return (
    <>
    <IntroImgStyle>
      <img className='introHat' src='./Img/introHatImg.png' alt='서비스소개모자이미지'/>
    </IntroImgStyle>
    <IntroTextStyle>
    <h3>01</h3>
    <h4>출산 전 지식 도움 </h4>
    <h3>출산 전에 여러 지식을 간편하게 볼 수 있어요!</h3>
    <p>출산 전 여러 정보에 대해 간편하게 볼 수 있는 서비스입니다.<br/>
    사야할 영양제와 산모 용품 그리고 아이에게 필요한 제품 등을<br/>
    쉽게 구매할 수 있으며 알아볼 수 있습니다. 의사선생님과 연결<br/>
    된 커뮤니티로 다양한 지식도 물어볼 수 있습니다!</p>
    </IntroTextStyle>
    </>
  );
}

export function Content2() {
  return (
    <>
    <IntroImgStyle>
      <img className="introBook" src='./img/introBook.png' alt='서비스소개책이미지'/>
    </IntroImgStyle>
    <IntroTextStyle>
    <h3>02</h3>
    <h4>산모 수첩/일기 공유</h4>
    <h3>산모 수첩 매번 수기로 작성하기 힘드시죠?</h3>
    <p>산모 수첩 수기로 작성하기 힘드시죠? 그리고 공유를 하기 조금 어렵지 않나요? <br/>
      진료 후 바로 업데이트 되는 산모 수첩으로 산모도 의료진도 그리고 보호자도 쉽게 <br/>
      공유 할 수 있는 산모 수첩 공유 및 일기 공유입니다. <br/>
      저희 MOING에서 산모수첩 공유 서비스를 이용해보세요
    </p>
    </IntroTextStyle>
    </>
  );
}

export function Content3() {
  return (
    <>
    <IntroImgStyle>
      <img className="introChart" src='./img/introChartImg.png' alt='서비스소개차트이미지'/>
    </IntroImgStyle>
    <IntroTextStyle>
    <h3>03</h3>
    <h4>출산 후 케어 도움</h4>
    <h3>출산 후에도 도와주는 MOING!</h3>
    <p>출산 후 몸 관리 힘드시죠? 출산 후에도 여러 정보를 주며 도움을 드립니다.<br/>
    여러 제품 추천과 활성화 된 커뮤니티 그리고 의사선생님에게 묻는 질문 등<br/>
    으로 출산 후에도 체계적으로  여러 도움을 주는 서비스입니다.<br/>
    출산 전에도 중에도 후에도 도움을 주는 MOING!
    </p>
    </IntroTextStyle>

    </>
  );
}
