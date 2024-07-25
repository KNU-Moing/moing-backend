import styled from "@emotion/styled";


const CookPutPageHeader = styled.div`
margin-top: 13.8%;
margin-left: 5rem;
.cookPutTitle{
color: #000;
font-family: Pretendard Variable;
font-size: 1.8rem;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: 8rem;
}
.cookMainImgPut{
    margin-top: 6rem;
    margin-left: 8rem;
    color: #000;
    font-family: Pretendard Variable;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
`;

const CookPutImgBox = styled.div`
display: flex;
margin-left: 12rem;
img{
width: 350px;
height: 230px;
margin-left: 1rem;
border-radius: 16px;
background: url(<path-to-image>), lightgray 50% / cover no-repeat, #D9D9D9;
}
`;

const CookLabelHead = styled.div`
color: #000;
font-family: Pretendard Variable;
font-size: 1.2rem;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: 15rem;
margin-top: 3rem;
`

const CookPutStep1 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-left: 15rem;

  .cookstepTitle{
  color: #FF9494;
  font-family: Pretendard Variable;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 2rem;
  }

  .cookputLabel1 {
    display: flex;
    flex-direction: column; /* 세로 방향으로 정렬 */
    color: #000;
    font-family: Pretendard Variable;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 3rem;
    margin-top: 3rem;
  }
  label{
    display: flex;
    justify-content: flex-end;
    
  }
`;
const CookPutInputStyle = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 60px;
  border: 1px solid #FF9494;
  background: #FFF;
  margin-left: 9rem;
  margin-bottom: 1rem;
  input {
    width: 500px;
    margin-left: 1rem;
    border: none;
    outline: none; 
  }
`


const CookPutStep2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-left: 15rem;
  color: #000;
  font-family: Pretendard Variable;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  .cookstepTitle {
    color: #FF9494;
    font-family: Pretendard Variable;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-right: 2rem;
  }
  label {
    display: flex; 
    align-items: center; 
    justify-content: flex-end; 
    margin-left: 6rem;
  }
`;


const CookPutStep3 = styled.div`
display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-left: 15rem;

  .cookstepTitle{
  color: #FF9494;
  font-family: Pretendard Variable;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 2rem;
}
label{
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  color: #000;
  font-family: Pretendard Variable;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 3rem;
  input{
    width: 830px;
    height: 217px;
    flex-shrink: 0;
    margin-top: 1rem;
    border-radius: 16px;
    border: 1px solid #FF9494;
    background: #FFF;
  }
}
`

const CookPutbutton = styled.button`
width: 3rem;
height: 1.8rem;
flex-shrink: 0;
border-radius: 92px;
border: none;
background: #FF9494;
color: #FFF;
font-family: Pretendard Variable;
font-size: 0.8rem;
font-style: normal;
font-weight: 500;
line-height: normal;

`

const GoNextCookPut = () =>{
    return(
        <>
        <button className="gonextCookput"  
        style={{
          background: '#fff',
          border: 'none',
          marginTop: '1rem',
          marginLeft: '70rem',
        }} type="submit">다음
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 18 32" fill="none">
          <path d="M0.999997 31L16 16L0.999999 1" stroke="#FF9494" stroke-width="2"/>
        </svg>
        </>

    );
}



export { CookPutInputStyle, CookPutImgBox, CookPutPageHeader, CookLabelHead, CookPutStep1, CookPutStep2, CookPutStep3, GoNextCookPut, CookPutbutton };
