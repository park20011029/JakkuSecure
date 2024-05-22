import React, {useState} from "react";
import styled from "styled-components";
import Button from "../button/Button";
import {Link} from "react-router-dom";
import api from "../../axios";

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
    const [nickName, setNickName] = useState("");
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const signUp = async () => {
        if (password !== passwordCheck) {
                alert("비밀번호가 일치하지 않습니다.");
                return;
        }
        const data = {
            userNickname: nickName,
            loginId: loginId,
            password: password
        }
        const response = await api.post("/login/sign-up", data);
        if (response.status === 200) {
            alert("회원가입이 완료되었습니다.");
            window.location.href = "/";
        }
    }


    return(
        <BoxList>
            <TextBox placeholder="NickName" value={nickName} onChange={(e) => setNickName(e.target.value)}/>
            <TextBox placeholder="ID" value={loginId} onChange={(e) => setLoginId(e.target.value)}/>
            <TextBox placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <TextBox placeholder="Password Check" type="password" value={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)}/>
            <Button_sign onClick={signUp}>회원가입</Button_sign>
        </BoxList>
    )
}

export default Input;