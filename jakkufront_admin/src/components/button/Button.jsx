import React from "react";
import styled from "styled-components";

const Styledbtn = styled.button`
  /*공통 스타일*/
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 0.3vw;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  
  /*크기*/
  height: 2vw;
  font-size: 1vw;

  /*색상 */
  background: #000000;
  &:hover{
    background: rgba(0, 0, 0, 0.8);
  }
  &:active{
    background: rgba(0, 0, 0, 0.2);
  }
`

function Button({children,...rest}){
    return <Styledbtn {...rest}>{children}</Styledbtn>
}
export default Button;