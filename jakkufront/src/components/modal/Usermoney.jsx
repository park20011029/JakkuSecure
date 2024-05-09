import React from 'react';
import styled from "styled-components";
import {useRecoilValue} from "recoil";
import {usermoneyState} from "../../atoms/atom";

const UsermoneyBox = styled.div`
  display: flex;
  flex-direction: column;
`

const SaveBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3vw;
`

const SaveTitle = styled.div`
  font-size: 1.5vw;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  
  margin-bottom: 2vw;
`

const Savecontent = styled.div`
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

function Usermoney() {
    const usermoney = useRecoilValue(usermoneyState);

    const usermoney_ = usermoney.toLocaleString('ko-KR');

    return (
        <UsermoneyBox>
            <SaveTitle>
                잔액확인
            </SaveTitle>
            <SaveBox>
                <Savecontent>
                    내 잔액
                </Savecontent>
                <TextBox placeholder={usermoney_ + '원'}/>
            </SaveBox>
        </UsermoneyBox>
    );
}

export default Usermoney;