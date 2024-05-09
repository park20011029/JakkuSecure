import React from 'react';
import styled from "styled-components";
import Button from "../button/Button";

const UsernameBox = styled.div`
  display: flex;
  flex-direction: column;
`

const NameBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2vw;
`

const NameTitle = styled.div`
  font-size: 1.5vw;
  font-style: normal;
  font-weight: bold;
  line-height: normal;

  margin-bottom: 2vw;
`

const Namecontent = styled.div`
  font-size: 1vw;
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

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 3vw;
`

const Button_ = styled(Button)`
  height: 2vw;
  width: 8vw;
`

function Username() {
    return (
        <UsernameBox>
            <NameTitle>
                닉네임 변경
            </NameTitle>
            <NameBox>
                <Namecontent>
                    닉네임
                </Namecontent>
                <TextBox placeholder="박민기"/>
            </NameBox>
            <ButtonBox>
                <Button_>수정</Button_>
                <Button_>취소</Button_>
            </ButtonBox>
        </UsernameBox>
    );
}

export default Username;