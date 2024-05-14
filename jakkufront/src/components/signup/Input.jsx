import React from "react";
import styled from "styled-components";
import Button from "../button/Button";
import {Link} from "react-router-dom";

const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
`

const TextBox = styled.input`
  width: 23vw;
  border: 2px solid #aaa;
  border-radius: 4px;
  outline: none;
  transition: .3s;
  padding: 0.5vw;

  margin: 1vw;
  
  font-size: 1.5vw;
`

const Button_sign = styled(Button)`
  width : 23vw;
  height: 5vh;
  margin: 1vw;
  
  font-size: 1.5vw;
`

function Input() {
    return(
        <BoxList>
            <TextBox placeholder="NickName"/>
            <TextBox placeholder="ID"/>
            <TextBox placeholder="Password" type="password"/>
            <TextBox placeholder="Password Check" type="password"/>
            <Button_sign>회원가입</Button_sign>
        </BoxList>
    )
}

export default Input;