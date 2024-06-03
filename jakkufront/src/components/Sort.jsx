import React from "react";
import styled from 'styled-components';
import {useRecoilState, useRecoilValue} from 'recoil';
import {latestState, pageState, priceOrderState, priceState, statusState} from '../atoms/atom';

const CategoriTitle = styled.div`
  font-size: 2vw;
  font-weight: bold;
  color: #000;
  padding-top: 6vh;
  padding-left: 6.5vw;
  margin-bottom: 1vw;
`

const Sorted = styled.div`
  margin: 1.3vw;
  display: flex;
`

const BaseStyle = styled.button`
  height: 4vh;
  margin-left: 2vh;
  border-radius: 20vh;
  border: none;
  font-weight: 600;
  font-size: 0.9vw;
  
  background: rgba(217, 217, 217, 0.7);
  &:hover{
    background: rgba(217, 217, 217, 0.5);
  }
  &:active{
    background: rgba(217, 217, 217, 0.3);
  }
`

const SortStyle1 = styled(BaseStyle)`
    width: 5vw;
    margin-left: 5vw;
`

const SortStyle2 = styled(BaseStyle)`
    width: 5vw;
`

const SortHr = styled.hr`
  background: rgba(0, 0, 0, 0.20);
  width: 95%;
  margin: auto;
`

function Sort() {
    const page = useRecoilValue(pageState);
    const [latest, setLatest] = useRecoilState(latestState);
    const [price, setPrice] = useRecoilState(priceOrderState);
    const [status, setStatus] = useRecoilState(statusState);

    const toggleLatest = () => {
        setLatest(prev => prev === 'desc' ? 'asc' : 'desc');
    };

    const togglePrice = () => {
        setPrice(prev => prev === 'desc' ? 'asc' : 'desc');
    };

    const toggleStatus = () => {
        setStatus(prev => prev === 'desc' ? 'asc' : 'desc');
    };

    return (
        <>
            <CategoriTitle>
                {page === 0 ? '상품목록' : page === 1 ? '장바구니' : '내 구매 내역'}
            </CategoriTitle>
            <SortHr />
            <Sorted>
                <SortStyle1 onClick={() => {
                    if (page === 0 || page !== 1) {
                        toggleLatest();
                    }
                }}>
                    {page === 0 ? '최신' : page === 1 ? '수량' : '최신'}
                </SortStyle1>
                <SortStyle2 onClick={() => {
                    if (page === 0) {
                        togglePrice();
                    } else if (page !== 1) {
                        toggleStatus();
                    }
                }}>
                    {page === 0 ? '가격' : page === 1 ? '가격' : '상태'}
                </SortStyle2>
            </Sorted>
            <SortHr />
        </>
    );
}

export default Sort;
