import React from 'react';
import styled from "styled-components";

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
`

const SaveBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SaveTitle = styled.div`
  font-size: 1.8vw;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  
  margin-bottom: 2vw;
`

const Imgcontent = styled.div`
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

const ItemImageBox = styled.div`
  width: 10vw;
  height: 10vh;
  background: rgba(217, 217, 217, 0.2);
  border-radius: 1vw;
  margin: 2vw 2vw 2vw 6vw;
`;

const ItemImage = styled.img`
  width: 10vw;
  height: 10vh;
`;

function AdminImg() {
    return (
        <ImgBox>
            <SaveTitle>
                상품추가
            </SaveTitle>
            <SaveBox>
                <Imgcontent>
                    이미지
                </Imgcontent>
                <TextBox placeholder='불러오기'/>
            </SaveBox>
            <ItemImageBox>
                <ItemImage className="logoImg" src="https://secure-project-dev-image.s3.ap-northeast-2.amazonaws.com/secure-project-front-image/ex_item.svg" alt="로고"/>
            </ItemImageBox>
        </ImgBox>
    );
}

export default AdminImg;