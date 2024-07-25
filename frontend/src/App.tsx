import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./component/project/main";
import { MyPage } from "./component/project/mypage";
import { SignIn } from "./component/project/sign/signIn";
import { SignUp } from "./component/project/sign/signUp";
import { Community } from "./component/project/community";
import { QnA } from "./component/project/community/QnA.tsx";
import { Board } from "./component/project/community/Board.tsx";
import { Notebook } from "./component/project/maternityNotebook/notebook";
import { Diary } from "./component/project/maternityNotebook/diary";
import { DiaryCreate } from "./component/project/maternityNotebook/diary/create.tsx";
import { DiaryRead } from "./component/project/maternityNotebook/diary/read.tsx";
import { DiaryUpdate } from "./component/project/maternityNotebook/diary/update.tsx";
import { Cook } from "./component/project/cook";
import { Detail } from "./component/project/cook/detail.tsx";
import { Supplies } from "./component/project/supplies";
import { Question } from "./component/project/question/questionWrite";
import QuestionConfirm from "./component/project/question/questionConfirm";
import { Detail2 } from "./component/project/supplies/detail.tsx";
import CookPut from "./component/project/cookput";
import { RegistCook } from "./component/project/cook/regist.tsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Mypage" element={<MyPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Notebook" element={<Notebook />} />
        <Route path="/Diary" element={<Diary />} />
        <Route path="/Diary/Write" element={<DiaryCreate />} />
        <Route path="/Diary/:item" element={<DiaryRead />} />
        <Route path="/Diary/update/:item" element={<DiaryUpdate />} />
        <Route path="/Cook" element={<Cook />} />
        <Route path="/Cook/:item" element={<Detail />} />
        <Route path="/CookRegist/:item" element={<RegistCook />} />
        <Route path="/Supplies" element={<Supplies />} />
        <Route path="/Supplies/:item" element={<Detail2 />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Community/QnA" element={<QnA />} />
        <Route path="/Community/Board" element={<Board />} />
        <Route path="/Question" element={<Question />} />
        <Route path="/Question/Confirm" element={<QuestionConfirm />} />
        <Route path="/Cookput" element={<CookPut />} />
      </Routes>
    </div>
  );
}

export default App;
