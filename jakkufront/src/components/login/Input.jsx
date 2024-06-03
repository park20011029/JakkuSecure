import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Button from "../button/Button";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import api from "../../axios";
import {useRecoilState} from "recoil";
import {tryCounter} from "../../atoms/atom";

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
    const [tryCount, settryCount] = useRecoilState(tryCounter);

    useEffect(() => {
        let timer;
        if (tryCount > 5) {
            timer = setTimeout(() => {
                settryCount(0);
                alert("로그인 시도 횟수가 초기화되었습니다. 다시 시도해주세요.");
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [tryCount, settryCount]);

    const overflowInput = (input) => {
        const sqlInjectionPattern = /[;'"--/*#\\]/;
        return input.length >= 2 && input.length <= 100;
    };

    const injectInput = (input) => {
        const sqlInjectionPattern = /[;'"--/*#\\]/;
        return !sqlInjectionPattern.test(input);
    }

    const handleLogin = async () => {
        if (!overflowInput(loginId)) {
            alert("아이디는 2글자 이상, 100글자 이하로 입력해주세요.");
            return;
        }
        if(!overflowInput(password)) {
            alert("비밀번호는 2글자 이상, 100글자 이하로 입력해주세요.");
            return;
        }
        if(!injectInput(loginId)) {
            alert("아이디에 사용할 수 없는 문자가 포함되어 있습니다.");
            return;
        }
        if(!injectInput(password)) {
            alert("비밀번호에 사용할 수 없는 문자가 포함되어 있습니다.");
            return;
        }
        if(tryCount > 5) {
            alert("로그인 시도 횟수를 초과했습니다. 잠시 후 다시 시도해주세요.");
            return;
        }

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
            settryCount((prevCount) => {
                const newCount = prevCount + 1;
                alert(`로그인 실패. ${5 - newCount}회 남았습니다.`);
                return newCount;
            });
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