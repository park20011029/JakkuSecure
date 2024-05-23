import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import NumberBox from "../button/NumberBox";
import axios from "axios";
import api from "../../axios";

const SortHr = styled.hr`
    background: rgba(0, 0, 0, 0.20);
    width: 85%;
    margin: auto;
`

const ComponentBox = styled.div`
    display: flex;
    width: 90vw;
    justify-content: space-evenly;
`

const ItemImageBox = styled.div`
    width: 20vw;
    height: 30vh;
    margin: 3vw 3vw 3vw 8vw;
    background: rgba(217, 217, 217, 0.2);
    border-radius: 2vw;
`

const ItemImage = styled.img`
    width: 20vw;
    height: 30vh;
`

const ItemDetail = styled.div`
    width: 30vw;
    margin-top: 4vw;
    margin-right: 5vw;
`

const ItemTitle = styled.div`
    color: rgba(0, 0, 0, 0.80);
    display: flex;
    font-family: Inter;
    font-size: 1.5vw;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const ItemPrice =styled.div`
    color: #000;
    font-family: Inter;
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 0.5vw;
`

const ItemNumber = styled.div`
    margin-top: 7.5vw;
`

const ItemPutIn = styled.div`
    display: flex;
    margin-top: 1vw;
`

const BaseStyle = styled.button`
    height: 3vh;
    margin-left: 2vh;
    border-radius: 20vh;
    border: none;
    font-weight: 600;
    font-size: 0.9vw;

    background: rgba(217, 217, 217, 0.7);
    &:hover{
        background: rgba(217, 217, 217, 0.5);
    }
    &:active{
        background: rgba(217, 217, 217, 0.3);
    }
`

const SortStyle = styled(BaseStyle)`
    width: 4vw;
`

function Inventory({items}) {

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
            const response = await api.post('/customers/addItem', {
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

    return (
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
                        <ComponentBox key={item.itemId}>
                            <ItemImageBox>
                                <ItemImage src={item.imageUrl} alt={item.itemName}/>
                            </ItemImageBox>
                            <ItemDetail>
                                <ItemTitle>{item.itemName}</ItemTitle>
                                <ItemPrice>{item.itemPrice.toLocaleString('ko-KR')}원</ItemPrice>
                                <ItemNumber>남은 수량 : {item.itemAmount}개</ItemNumber>
                                <ItemPutIn>
                                    <NumberBox
                                        value={quantities[item.itemId]}
                                        onChange={(value) => handleQuantityChange(item.itemId, value, item.itemAmount)}
                                    />
                                    <SortStyle onClick={() => handleAddToBasket(item.itemId)}>
                                        담기
                                    </SortStyle>
                                </ItemPutIn>
                            </ItemDetail>
                        </ComponentBox>
                        <SortHr/>
                    </>
                ))
            )}

        </>
    );
}



export default Inventory;