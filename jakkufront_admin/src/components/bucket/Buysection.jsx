import React from "react";
import styled from "styled-components";
import Button from "../button/Button";
import { useRecoilValue } from 'recoil';
import { totalPriceState } from '../../atoms/selector';
import {usermoneyState} from "../../atoms/atom";

const Buyremote = styled.div`
  margin-top: 1vw;
  width: 15vw;
  height: 45vh;
  border: 4px solid rgba(0,0,0, 0.1);
  position: fixed;
`

const SortHr = styled.hr`
  background: 4px rgba(0,0,0, 0.1);
  width: 12vw;
  height: 4px;
  border: 0;
  margin: auto;
`;

const Beforebuy = styled.div`
  width: 12vw;
  margin: auto;
  padding: 1vw;
`

const Afterbuy = styled.div`
  width: 12vw;
  margin: auto;
  padding: 1vw;
`

const Moneyword = styled.div`
  color: rgba(0, 0, 0, 0.80);
  font-family: Inter;
  font-size: 1.3vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 0.5vw;
`;

const Moneynumber = styled.div`
  color: rgba(0, 0, 0, 0.80);
  font-family: Inter;
  font-size: 1.3vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0.5vw;
  text-align: right;
`;

const Buybtn = styled.div`
  margin-top: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Buysection() {
    const totalPrice = useRecoilValue(totalPriceState);
    const usermoney = useRecoilValue(usermoneyState);

    const usingAfter = usermoney - totalPrice;

    const usermoney_ = usermoney.toLocaleString('ko-KR');
    const usingAfter_ = usingAfter.toLocaleString('ko-KR');
    const totalPrice_ = totalPrice.toLocaleString('ko-KR');

    return (
        <Buyremote>
            <Beforebuy>
                <Moneyword>
                    내 잔액
                </Moneyword>
                <Moneynumber>
                    {usermoney_}원
                </Moneynumber>
                <Moneyword>
                    주문 예상 금액
                </Moneyword>
                <Moneynumber>
                    {totalPrice_}원
                </Moneynumber>
            </Beforebuy>
            <SortHr/>
            <Afterbuy>
                <Moneyword>
                    결제 후 잔액
                </Moneyword>
                <Moneynumber>
                    {usingAfter_}원
                </Moneynumber>
                <Buybtn>
                    <Button>결제하기</Button>
                </Buybtn>
            </Afterbuy>
        </Buyremote>
    );
}

export default Buysection;