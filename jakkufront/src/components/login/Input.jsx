import React, {useState} from "react";
import styled from "styled-components";
import Button from "../button/Button";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import api from "../../axios";

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
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await api.post("/login/sign-in", {
                loginId: loginId,
                password: password,
            });

            const { accessToken, refreshToken } = response.data.responseDto;

            localStorage.setItem('access_token', accessToken);
            localStorage.setItem('refresh_token', refreshToken);

            navigate("/categori");
            console.log("로그인 성공:", response.data);
        } catch (error) {
            // 로그인 실패 처리
            console.error("로그인 실패:", error);
        }
    };

    return (
        <BoxList>
            <TextBox
                placeholder="ID"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
            />
            <TextBox
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button_login onClick={handleLogin}>로그인</Button_login>
            <Link to="/signup">
                <Button_signup>회원가입</Button_signup>
            </Link>
        </BoxList>
    );
}

export default Input;