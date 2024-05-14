import React from "react";
import styled from 'styled-components';
import {useRecoilState, useRecoilValue} from 'recoil';
import {modalState, pageState} from '../atoms/atom';
import Button from './itemlist/PlusItem';
import {useLocation} from "react-router-dom";

const Arraylist = styled.div`
  display: flex;
  justify-content: space-between;
`;

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
  width: 95%;
  margin: auto;
`;

const PlusItem = styled(Button)`
  background-color: rgba(217, 217, 217, 0.6);

  &:hover {
    background: rgba(217, 217, 217, 0.3);
  }

  &:active {
    background: rgba(217, 217, 217, 0.1);
  }

  width: 10vw;
  height: 5vh;
  margin-top: 7vh;
  margin-right: 4vw;

  color: black;
  font-size: 1.5vw;
`;

function Sort() {
    const page = useRecoilValue(pageState);

    const location = useLocation();
    const isListPage1 = location.pathname === "/list";

    const [isOpen, setIsOpen] = useRecoilState(modalState);

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <Arraylist>
                <CategoriTitle>
                    {page === 0 ? '상품목록' : '픽업 관리'}
                </CategoriTitle>

                {(isListPage1) && (
                    <PlusItem onClick={openModal}>상품 추가</PlusItem>
                )}

            </Arraylist>

            <SortHr />
            <Sorted>
                <SortStyle1>
                    {page === 0 ? '수량' : '최신'}
                </SortStyle1>
                <SortStyle2>
                    {page === 0 ? '등록일자' : '상태'}
                </SortStyle2>
            </Sorted>
            <SortHr />
        </>
    );
}

export default Sort;
