import React from 'react';
import styled from "styled-components";
import Button from "../button/Button";

const UserpasswordBox = styled.div`
  display: flex;
  flex-direction: column;
`

const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vw;
`

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1vw;
`

const TextBox = styled.input`
  width: 15vw;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin-left: 3vw;
  outline: none;
  transition: .3s;
  padding: 0.5vw;

  font-size: 1vw;
`

const PasswordTitle = styled.div`
  font-size: 1.5vw;
  font-style: normal;
  font-weight: bold;
  line-height: normal;

  margin-bottom: 2vw;
`

const Namecontent = styled.div`
  font-size: 1vw;
`

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
`

const Button_ = styled(Button)`
  height: 2vw;
  width: 8vw;
`

function UserPassword() {
    return (
        <UserpasswordBox>
            <PasswordTitle>
                비밀번호 변경
            </PasswordTitle>
            <PasswordBox>
                <InputBox>
                    <Namecontent>
                        기존 비밀번호
                    </Namecontent>
                    <TextBox type="password" placeholder="Password"/>
                </InputBox>
                <InputBox>
                    <Namecontent>
                        새 비밀번호
                    </Namecontent>
                    <TextBox type="password" placeholder="New Password"/>
                </InputBox>
                <InputBox>
                    <Namecontent>
                        새 비밀번호 확인
                    </Namecontent>
                    <TextBox type="password" placeholder="New Password"/>
                </InputBox>
            </PasswordBox>
            <ButtonBox>
                <Button_>수정</Button_>
                <Button_>취소</Button_>
            </ButtonBox>
        </UserpasswordBox>
    );
}

export default UserPassword;