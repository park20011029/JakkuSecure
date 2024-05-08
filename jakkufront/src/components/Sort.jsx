import React from "react";
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { pageState } from '../atoms/atom';

const CategoriTitle = styled.div`
  font-family: Inter;
  font-size: 2vw;
  font-weight: bold;
  color: #000;
  padding-top: 6vh;
  padding-left: 6.5vw;
  margin-bottom: 1vw;
`;

const Sorted = styled.div`
  margin: 1.3vw;
  display: flex;
`;

const BaseStyle = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4vh;
      margin-left: 2vh;
      border-radius: 20vh;
      background: rgba(217, 217, 217, 0.50);
      text-align: center;
      font-weight: 600;
`;

const SortStyle1 = styled(BaseStyle)`
    width: 5vw;
    margin-left: 9vh;
`;

const SortStyle2 = styled(BaseStyle)`
    width: 5vw;
`;

const SortHr = styled.hr`
  background: rgba(0, 0, 0, 0.20);
  width: 85vw;
  margin: auto;
`;

function Sort() {
    const page = useRecoilValue(pageState);

    return (
        <>
            <CategoriTitle>
                {page === 0 ? '상품목록' : page === 1 ? '장바구니' : '내 구매 내역'}
            </CategoriTitle>
            <SortHr />
            <Sorted>
                <SortStyle1>
                    {page === 0 ? '최신' : page === 1 ? '수량' : '최신'}
                </SortStyle1>
                <SortStyle2>
                    {page === 0 ? '가격' : page === 1 ? '가격' : '상태'}
                </SortStyle2>
            </Sorted>
            <SortHr />
        </>
    );
}

export default Sort;
