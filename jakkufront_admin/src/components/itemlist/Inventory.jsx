import React, {useState} from 'react';
import styled from "styled-components";
import NumberBox from "../button/NumberBox";
import api from "../../axios";

const SortHr = styled.hr`
  background: rgba(0, 0, 0, 0.20);
  width: 80vw;
  margin: auto;
`;

const InventroyComponent = styled.div`
  display: flex;
  width: 90vw;
  justify-content: space-evenly;
`;


const ItemImageBox = styled.div`
  width: 20vw;
  height: 30vh;
  margin: 3vw 3vw 3vw 8vw;
  background: rgba(217, 217, 217, 0.2);
  border-radius: 2vw;
`;

const ItemImage = styled.img`
  width: 20vw;
  height: 30vh;
`;

const ItemDetail = styled.div`
  width: 30vw;
  margin-top: 4vw;
  margin-right: 5vw;
`;

const ItemTitle = styled.div`
  color: rgba(0, 0, 0, 0.80);
  display: flex;
  font-family: Inter;
  font-size: 1.5vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ItemPrice =styled.div`
  color: #000;
  font-family: Inter;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 0.5vw;
`;

const SoldOut = styled.div`
    Color: #898989;
    display: flex;
    font-family: Inter;
    font-size: 1.5vw;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
 `;

const SoldOutItemPrice =styled.div`
    Color: #898989;
    font-family: Inter;
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 0.5vw;
`

const SoldOutItemNumber = styled.div`
    margin-top: 7.5vw;
    Color: #898989;
`

const ItemNumber = styled.div`
  margin-top: 7.5vw;
`
const ItemPutIn = styled.div`
  display: flex;
  margin-top: 1vw;
`

const BaseStyle = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3vh;
      margin-left: 2vh;
      border-radius: 20vh;
      background: rgba(217, 217, 217, 0.50);
      text-align: center;
`;

const SortStyle = styled(BaseStyle)`
    width: 6vw;
`;

function Inventory({items}){

    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (itemId, quantity, totalQuantity) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemId]: quantity
        }));

        if(quantity > totalQuantity) {
            alert("재고 부족입니다.");
            quantity -= 1;
        }
    };

    const handleAddToBasket = async (itemId) => {
        try {
            const response = await api.patch('/admin/addItemAmount', {
                itemId: itemId,
                itemAmount: quantities[itemId]
            });
            if (response.data.success) {
                alert("상품이 장바구니에 담겼습니다.");
            }
        } catch (error) {
            alert("담기 에러 발생");
        }
    };


    return(
        <>
            {items.length === 0 ? (
                <ItemDetail>
                    <ItemTitle>
                        등록된 상품이 없습니다.
                    </ItemTitle>
                </ItemDetail>
            ) : (
                items.map(item => (
                    <>
                        <InventroyComponent key={item.itemId}>
                            <ItemImageBox>
                                <ItemImage src={item.imageUrl} alt={item.itemName}/>
                            </ItemImageBox>
                            <ItemDetail>
                                {item.itemAmount === 0 ? (
                                        <>
                                            <SoldOut>{item.itemName}</SoldOut>
                                            <SoldOutItemPrice>{item.itemPrice.toLocaleString('ko-KR')}원</SoldOutItemPrice>
                                            <SoldOutItemNumber>품절 상품입니다.</SoldOutItemNumber>
                                        </>
                                    )
                                    : (<>
                                        <ItemTitle>{item.itemName}</ItemTitle>
                                        <ItemPrice>{item.itemPrice.toLocaleString('ko-KR')}원</ItemPrice>
                                        <ItemNumber>남은 수량 : {item.itemAmount}개</ItemNumber>
                                    </>)}

                                <ItemPutIn>
                                    <NumberBox
                                        value={quantities[item.itemId]}
                                        onChange={(value) => handleQuantityChange(item.itemId, value, item.itemAmount)}
                                    />
                                    <SortStyle onClick={() => handleAddToBasket(item.itemId)}>
                                        수량 추가
                                    </SortStyle>
                                </ItemPutIn>
                            </ItemDetail>
                        </InventroyComponent>
                        <SortHr/>
                    </>
                ))
            )}
            <InventroyComponent>
                <ItemImageBox>
                    <ItemImage className="logoImg" src="https://secure-project-dev-image.s3.ap-northeast-2.amazonaws.com/secure-project-front-image/ex_item.svg" alt="로고"/>
                </ItemImageBox>
                <ItemDetail>
                    <ItemTitle>
                        1000R 커브드 모니터LC32T5  52FDKXKR
                    </ItemTitle>
                    <ItemPrice>
                        KRW152,512~KRW156,564
                    </ItemPrice>
                    <ItemNumber>
                        남은 수량 : 15개
                    </ItemNumber>
                    <ItemPutIn>
                        <NumberBox/>
                        <SortStyle>
                            수량 추가
                        </SortStyle>
                    </ItemPutIn>
                </ItemDetail>
            </InventroyComponent>
            <SortHr/>


            <InventroyComponent>
                <ItemImageBox>
                    <ItemImage className="logoImg" src="https://secure-project-dev-image.s3.ap-northeast-2.amazonaws.com/secure-project-front-image/ex_item.svg" alt="로고"/>
                </ItemImageBox>
                <ItemDetail>
                    <ItemTitle>
                        1000R 커브드 모니터LC32T5  52FDKXKR
                    </ItemTitle>
                    <ItemPrice>
                        KRW152,512~KRW156,564
                    </ItemPrice>
                </ItemDetail>
            </InventroyComponent>
            <SortHr/>
        </>
    );
}


export default Inventory;