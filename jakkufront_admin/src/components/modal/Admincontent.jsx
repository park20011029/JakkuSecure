import React, { useState } from 'react';
import styled from "styled-components";
import Button from "../button/Button";
import api from "../../axios";

const AdmincontentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vw;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1vw;
`;

const TextBox = styled.input`
  width: 15vw;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin-left: 3vw;
  outline: none;
  transition: .3s;
  padding: 0.5vw;
  font-size: 1vw;
`;

const Namecontent = styled.div`
  font-size: 1vw;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button_ = styled(Button)`
  height: 2vw;
  width: 8vw;
`;

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
`;

//============================================


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

const TextBoxImg = styled.input`
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


function Admincontent() {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemImage, setItemImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
            setItemImage(file);
            setImagePreview(URL.createObjectURL(file));
        } else {
            alert('나는 jpg랑 png로만 받을거임 ㅎㅎ');
        }
    };
    const addItem = () => {
        const formData = new FormData();
        formData.append('image', itemImage);  // Ensure imageSrc is the file object

        const data = {
            itemName: itemName,
            itemPrice: itemPrice,
            itemAmount: itemQuantity,
        };

        formData.append(
            "request",
            new Blob([JSON.stringify(data)], { type: "application/json" })
        );

        const config = { headers: { "Content-Type": "multipart/form-data" } };

        api.post("/admin/addItem", formData, config)
            .then(res => {
                // 성공 처리
                console.log("성공:", res.data);
            })
            .catch(err => {
                // 에러 처리
                console.error("에러 발생:", err);
            });

    };

    return (
        <AdmincontentBox>
            <ContentBox>
                <ImgBox>
                    <SaveTitle>
                        상품추가
                    </SaveTitle>
                    <SaveBox>
                        <Imgcontent>
                            이미지
                        </Imgcontent>
                        <TextBoxImg type="file" accept="image/jpeg, image/png" onChange={handleImageChange} />
                    </SaveBox>
                    {imagePreview && (
                        <ItemImageBox>
                            <ItemImage src={imagePreview} alt="미리보기" />
                        </ItemImageBox>
                    )}
                </ImgBox>

                <InputBox>
                    <Namecontent>상품명</Namecontent>
                    <TextBox
                        placeholder="상품명"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                </InputBox>
                <InputBox>
                    <Namecontent>가격</Namecontent>
                    <TextBox
                        placeholder="000원"
                        value={itemPrice}
                        onChange={(e) => setItemPrice(e.target.value)}
                    />
                </InputBox>
                <InputBox>
                    <Namecontent>수량</Namecontent>
                    <TextBox
                        placeholder="0개"
                        value={itemQuantity}
                        onChange={(e) => setItemQuantity(e.target.value)}
                    />
                </InputBox>
            </ContentBox>
            <ButtonBox>
                <Button_ onClick={addItem()}>추가</Button_>
                <Button_no>취소</Button_no>
            </ButtonBox>
        </AdmincontentBox>
    );
}

export default Admincontent;
