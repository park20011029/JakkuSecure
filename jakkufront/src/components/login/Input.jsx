import React from "react";
import styled from "styled-components";
import Button from "../button/Button";

const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
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

const Button_login = styled(Button)`
  width : 23vw;
  height: 5vh;
  margin: 1vw;
  
  font-size: 1.5vw;
`

const Button_signup = styled(Button)`
  background-color: darkgray;

  &:hover {
    background: rgb(168, 168, 168, 0.8);
  }

  &:active {
    background: rgba(168, 168, 168, 0.2);
  }

  width: 23vw;
  height: 5vh;
  margin: 1vw;

  color: black;
  font-size: 1.5vw;
`

function Input() {
    return(
        <BoxList>
            <TextBox placeholder="ID"/>
            <TextBox placeholder="Password" type="password"/>
            <Button_login>로그인</Button_login>
            <Button_signup>회원가입</Button_signup>
        </BoxList>
    )
}

export default Input;