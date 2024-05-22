import React from "react";
import styled from "styled-components";
import Button from "../button/Button";
import {useRecoilState, useRecoilValue} from 'recoil';
//import { totalPriceState } from '../../atoms/selector';
import {usermoneyState, basketItemsState, buyMoneyState, priceState} from "../../atoms/atom";
import axios from 'axios';
import api from "../../axios";

const Buyremote = styled.div`
  margin-top: 1vw;
  width: 15vw;
  height: 45vh;
  border: 4px solid rgba(0,0,0, 0.1);
  position: fixed;
  background-color: #FFFFFF;
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

function Buysection({ userId, remainMoney }) {
    if (!userId) {
        userId = 1;
    }

    //const totalPrice = useRecoilValue(totalPriceState);
    const usermoney = useRecoilValue(usermoneyState);
    const buymoneys = useRecoilValue(buyMoneyState);
    const totalprice = useRecoilValue(priceState);

    const totalPrice = 0;
    const usingAfter = usermoney - totalprice;

    const usermoney_ = usermoney.toLocaleString('ko-KR');
    const usingAfter_ = usingAfter.toLocaleString('ko-KR');
    const totalprice_ = totalprice.toLocaleString('ko-KR');

    const handlePayment = async () => {
        try {
            const items = Array.from(buymoneys).filter(([key]) => key >= 1).map(([key, value]) => ({
                itemId: key,
                buyItemAmount: value,
            }));

            const response = await api.patch(`/customers/payment`, items);
            if (response.data.success) {
                alert('결제가 완료되었습니다.');
            }
        } catch (error) {
            console.error('Error making payment:', error);
            console.log(error);
            alert('결제 중 오류가 발생하였습니다.');
        }
    };

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
                    {totalprice_}원
                </Moneynumber>
            </Beforebuy>
            <SortHr />
            <Afterbuy>
                <Moneyword>
                    결제 후 잔액
                </Moneyword>
                <Moneynumber>
                    {usingAfter_}원
                </Moneynumber>
                <Buybtn>
                    <Button onClick={handlePayment}>결제하기</Button>
                </Buybtn>
            </Afterbuy>
        </Buyremote>
    );
}

export default Buysection;
