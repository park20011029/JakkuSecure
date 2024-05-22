import React from 'react';
import styled from "styled-components";
import Button from "../button/Button";

const AdmincontentBox = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentBox = styled.div`
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

const Button_no = styled(Button)`
  background-color: #FFFFFF;
  &:hover{
    background: rgba(217, 217, 217, 0.8);
  }
  &:active{
    background: rgba(217, 217, 217, 0.2);
  }
  outline: 2px solid black;
  
  color: black;
   
  height: 2vw;
  width: 8vw;
`

function Admincontent() {
    return (
        <AdmincontentBox>
            <ContentBox>
                <InputBox>
                    <Namecontent>
                        상품명
                    </Namecontent>
                    <TextBox placeholder="상품명"/>
                </InputBox>
                <InputBox>
                    <Namecontent>
                        가격
                    </Namecontent>
                    <TextBox placeholder="000원"/>
                </InputBox>
                <InputBox>
                    <Namecontent>
                        수량
                    </Namecontent>
                    <TextBox placeholder="0개"/>
                </InputBox>
            </ContentBox>
            <ButtonBox>
                <Button_>추가</Button_>
                <Button_no>취소</Button_no>
            </ButtonBox>
        </AdmincontentBox>
    );
}

export default Admincontent;