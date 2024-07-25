import styled from '@emotion/styled';


export const WeekhelpComponent = styled.div`
`
export const WeekhelpText = styled.text`
position: relative; 
top: 100px;
width: 100%;
.weekhelpH1{
color: #000;
text-align: center;
font-family: Pretendard;
font-size: 34px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.weekhelpP{
color: #000;
text-align: center;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%;
letter-spacing: 0.5px;

.weekhelpSmallLogo{
    width: 88.916px;
    height: 21.433px;
    flex-shrink: 0;
}
}
`

export const WeekhelpRoundContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row; 
  align-items: center; 
  margin-top: 200px;
}
  `;

export const WeekhelpRound = styled.div`
width: 300px;
height: 300px;
flex-shrink: 0;
border-radius: 300px;
background: #FF9494;
display: flex;
justify-content: center; 
align-items: center; 
position: relative;
margin: 0 40px; 
transition: transform 0.3s;

  &:hover {
    transform: scale(1.05); 
  }

.emotion-img01{
  width: 94.776px;
  height: 132.297px;
  flex-shrink: 0;
}
.emotion-img02{
  width: 120.749px;
  height: 148.845px;
  flex-shrink: 0;
}
.emotion-img03{
  width: 95.094px;
  height: 172.642px;
  flex-shrink: 0;
}
.WeekhelpRoundText {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center; 
  color: #fff; 
  padding: 5px; 
}
`