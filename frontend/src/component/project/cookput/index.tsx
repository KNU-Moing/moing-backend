import React, { useState } from 'react';
import { BackButton } from '../../emotion/component';
import Header from '../header';
import { CookPutInputStyle, CookPutImgBox, CookPutPageHeader, CookLabelHead, CookPutStep1, CookPutStep2, CookPutStep3, GoNextCookPut, CookPutbutton} from './component';

interface FormState {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
  input5: string;
  input6: string;
}

const CookPut: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof FormState
  ) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
    <Header/>
    <CookPutPageHeader>
      <BackButton/>
      <h1 className='cookPutTitle'>조리원 등록</h1>
      <h3 className='cookMainImgPut'>대표 이미지 등록</h3>
    </CookPutPageHeader>
      <CookPutImgBox>
        <img src='./Img/cookPutImg.png' alt='대표이미지등록'/>
        <img src='./Img/cookPutImg.png' alt='대표이미지등록'/>
        <img src='./Img/cookPutImg.png' alt='대표이미지등록'/>
      </CookPutImgBox>
    <form onSubmit={handleSubmit}>
      <CookLabelHead>조리원 정보 작성</CookLabelHead>
      <CookPutStep1>
        <p className='cookstepTitle'>Step1</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="419" viewBox="0 0 4 619" fill="none">
          <path d="M2 0V618.5" stroke="#FF9494" stroke-width="4"/>
        </svg>
      <div className='cookputLabel1'>
      <label>
        업체명
        <CookPutInputStyle>
        <input
          type="text"
          value={formData.input1}
          onChange={(e) => handleInputChange(e, 'input1')}
        />
        </CookPutInputStyle>
      </label>
      <br />
      <label>
        사업자등록 번호
        <CookPutInputStyle>
        <input
          type="text"
          value={formData.input2}
          onChange={(e) => handleInputChange(e, 'input2')}
        />
        </CookPutInputStyle>
      </label>
      <br />
      <label>
        주소
        <CookPutInputStyle>
        <input
          type="text"
          value={formData.input3}
          onChange={(e) => handleInputChange(e, 'input3')}
        />
        <CookPutbutton>찾기</CookPutbutton>
        </CookPutInputStyle> 
      </label>
      <br/>
      <label>
        우편번호
        <CookPutInputStyle>
        <input
          type="text"
          value={formData.input4}
          onChange={(e) => handleInputChange(e, 'input4')}
        />
        <CookPutbutton>찾기</CookPutbutton>
        </CookPutInputStyle> 
      </label>
      </div>
      </CookPutStep1>
      <CookPutStep2>
      <h3 className='cookstepTitle'>Step2</h3>
      <svg xmlns="http://www.w3.org/2000/svg" width="2" height="200" viewBox="0 0 4 200" fill="none">
        <path d="M2 0V200" stroke="#FF9494" stroke-width="4"/>
      </svg>
      <label>
        전화번호
        <CookPutInputStyle>
        <input
          type="text"
          value={formData.input5}
          onChange={(e) => handleInputChange(e, 'input5')}
        />
        </CookPutInputStyle>
      </label>
      </CookPutStep2>
      <CookPutStep3>
      <h3 className='cookstepTitle'>Step3</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="319" viewBox="0 0 4 619" fill="none">
          <path d="M2 0V618.5" stroke="#FF9494" stroke-width="4"/>
        </svg>
      <label>
        업체소개
        <input
          type="text"
          value={formData.input6}
          onChange={(e) => handleInputChange(e, 'input6')}
        />
      </label>
      </CookPutStep3>
      <GoNextCookPut/>
    </form>
    </>
  );
};

export default CookPut;
