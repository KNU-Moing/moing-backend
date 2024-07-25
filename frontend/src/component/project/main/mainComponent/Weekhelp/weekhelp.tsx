import React, { FC } from "react";
import { WeekhelpComponent } from "./component";
import { WeekhelpText } from "./component";
import { WeekhelpRound } from "./component";
import { WeekhelpRoundContainer } from "./component";

export const Weekhelp: FC = () => {
    return (
        <WeekhelpComponent>
          <WeekhelpText>
            <h1 className="weekhelpH1">산모도 예비아빠도 편한 <img src="./img/weekhelpLogo.png" alt="주간도움로고"/></h1>
            <p className="weekhelpP">
              임신 초기, 중기, 후기 어떤 증상이 일어나고 어떤 점을 조심해야하며 어떤 것을 준비해야하는 것들의
            <br />
            <img className="weekhelpSmallLogo" src="./img/weekhelpLogo.png" alt="주간도움작은로고"/>에서 도와줍니다!</p>
          </WeekhelpText>
          <WeekhelpRoundContainer>
          <WeekhelpRound>
            <img src="./img/weekhelpImg01.png" alt="임신초기" className="emotion-img01" />
            <p className="WeekhelpRoundText">임신초기</p>
          </WeekhelpRound>
          <WeekhelpRound>
            <img src="./img/weekhelpImg02.png" alt="임신중기" className="emotion-img02" />
            <p className="WeekhelpRoundText">임신중기</p>
          </WeekhelpRound>
          <WeekhelpRound>
            <img src="./img/weekhelpImg03.png" alt="임신후기" className="emotion-img03" />
            <p className="WeekhelpRoundText">임신후기</p>
          </WeekhelpRound>
          </WeekhelpRoundContainer>
        </WeekhelpComponent>
    );
};
