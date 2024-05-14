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

function NumberBox(){
    const location = useLocation();
    const iscategoriPage1 = location.pathname === "/categori";

    const [count, setCount] = useRecoilState(countState);

    const [buy_count, setbuyCount] = useState(0);

    return (
        <>
            {(!iscategoriPage1) && (
                <CountBox>
                    <Btn onClick={() => count > 0 && setCount(prevCount => prevCount - 1)}>-</Btn>
                    <Textbox>{count}</Textbox>
                    <Btn onClick={() => setCount(prevCount => prevCount + 1)}>+</Btn>
                </CountBox>
            )}

            {(iscategoriPage1) && (
                <CountBox>
                    <Btn onClick={() => buy_count > 0 && setbuyCount(prevCount => prevCount - 1)}>-</Btn>
                    <Textbox>{buy_count}</Textbox>
                    <Btn onClick={() => setbuyCount(prevCount => prevCount + 1)}>+</Btn>
                </CountBox>
            )}
        </>
    );
}
export default NumberBox;