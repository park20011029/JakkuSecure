import React, {useState} from "react";
import styled from "styled-components";
import {useRecoilState} from "recoil";
import {countState} from "../../atoms/atom";
import {useLocation} from "react-router-dom";

const CountBox = styled.div`
  display: flex;
  width: auto;
  align-items:center;
  justify-content: space-between;
  border: 2px solid rgba(0,0,0);
`

const Btn = styled.button`
  display: flex;
  align-items:center;
  justify-content: center;
  outline: none;
  border: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
  
  /*크기*/
  font-size: 1vw;
  width: 2vw;
  height: 1.5vw;

  /*색상 */
  background: #ffffff;
  &:hover{
    background: rgba(0, 0, 0, 0.8);
  }
  &:active{
    background: rgba(0, 0, 0, 0.2);
  }
`

const Textbox = styled.span`
  width: 2.5vw;
  height: 1.5vw;
  border-width: 0 2px 0 2px;
  border-style: solid;
  border-color: black;
  
  display: flex;
  align-items:center;
  justify-content: center;
`

function NumberBox({ value, onChange }) {
    const location = useLocation();
    const iscategoriPage1 = location.pathname === "/categori";

    const handleIncrement = () => {
        onChange(value + 1);
    };

    const handleDecrement = () => {
        if (value > 0) {
            onChange(value - 1);
        }
    };

    return (
        <CountBox>
            <Btn onClick={handleDecrement}>-</Btn>
            <Textbox>{value}</Textbox>
            <Btn onClick={handleIncrement}>+</Btn>
        </CountBox>
    );
}

NumberBox.defaultProps = {
    value: 0
};

export default NumberBox;