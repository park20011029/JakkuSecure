import React from "react";
import styled from 'styled-components';

const CategoriTitle = styled.div`
    font-family: Inter;
    font-size: 2em;
    color: #000;
    padding-top: 6vh;
    padding-left: 5vw;
`;

const Sorted = styled.div`
    display: flex;
`;

const BaseStyle = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4vh;
      margin-left: 5vh;
      border-radius: 20vh;
      background: rgba(217, 217, 217, 0.50);
      text-align: center;
      font-weight: 600;
`;

const SortStyle1 = styled(BaseStyle)`
    width: 4vw;
`;

const SortStyle3 = styled(SortStyle1)`
    margin-left: 10vh;
`;

const SortStyle2 = styled(BaseStyle)`
    width: 5vw;
`;

const SortHr = styled.hr`
  background: rgba(0, 0, 0, 0.20);
  width: 85vw;
  margin: 2vh;
`;

function Sort() {
  return (
    <>
      <CategoriTitle>내가 선택한 카테고리</CategoriTitle>
      <SortHr />
      <Sorted>
        <SortStyle3>최신</SortStyle3>
        <SortStyle1>가격</SortStyle1>
        <SortStyle2>핫딜값</SortStyle2>
      </Sorted>
      <SortHr />
    </>
  );
}

export default Sort;
