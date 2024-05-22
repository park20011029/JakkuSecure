import React, { useState } from "react";
import styled from "styled-components";
import NumberBox from "../button/NumberBox";
import {buyMoneyState, priceState} from "../../atoms/atom";
import {useRecoilState} from "recoil";
import api from "../../axios";
import { IoMdClose } from "react-icons/io";

const SortHr = styled.hr`
    background: rgba(0, 0, 0, 0.20);
    width: 60vw;
    margin: auto;
`;

const InventroyComponent = styled.div`
    display: flex;
    width: 70vw;
    justify-content: space-evenly;
`;

const NoItemComponent = styled.div`
  display: flex;
  width: 70vw;
  height: 50vh;
  justify-content: space-evenly;
`;

const ItemImageBox = styled.div`
    width: 20vw;
    height: 30vh;
    margin: 3vw;
    margin-left: 8vw;
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

const ItemPrice = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 0.5vw;
`;

const ItemNumber = styled.div`
    margin-top: 7.5vw;
`

const ItemPutIn = styled.div`
    display: flex;
    margin-top: 1vw;
`

const Delete_box = styled.div`
  width: 3vw;
  height: 3vw;
  margin-right: 5vw;
`

const Delete_btn = styled(IoMdClose)`
  width: 100%;
  height: 100%;
  margin-top: 3vw;
  color: darkgray;
`


function BucketItem({ basketItems }) {

    const [quantities, setQuantities] = useState({});
    const [buymoneys, setBuyMoney] = useRecoilState(buyMoneyState);
    const [totalprice, setTotalPrice] = useRecoilState(priceState);

    const handleQuantityChange = (itemId, quantity, totalQuantity) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemId]: quantity
        }));

        const item = basketItems.find(item => item.itemId === itemId);
        const itemPrice = item.itemPrice;
        const totalPriceChange = itemPrice * parseInt(quantity) - itemPrice * parseInt(quantities[itemId] || 0);
        setTotalPrice(prevtotalprice => prevtotalprice + totalPriceChange);

        const newMap = new Map(buymoneys);
        newMap.set(itemId, quantity);
        setBuyMoney(newMap);

        if(quantity > totalQuantity) {
            alert("재고 부족입니다.");
            quantity -= 1;
        }
    };

    const handleRemoveItem = async (itemId) => {
        const itemid = itemId;
        try {
            const response = await api.delete(`/customers/basket/delete/${itemid}`);
            if (response.status === 200) {
                alert("상품이 장바구니에서 삭제되었습니다.");
                window.location.reload();
            }
        } catch (error) {
            console.error("Error removing item from basket:", error);
        }
    }

    return (
        <>
            {basketItems.length === 0 ? (
                <NoItemComponent>
                    <ItemTitle>
                        장바구니에 담긴 상품이 없습니다.
                    </ItemTitle>
                </NoItemComponent>
            ) : (
                basketItems.map(item => (
                    <>
                        <InventroyComponent key={item.itemId}>
                            <ItemImageBox>
                                <ItemImage src={item.imageUrl} alt={item.itemName}/>
                            </ItemImageBox>
                            <ItemDetail>
                                <ItemTitle>{item.itemName}</ItemTitle>
                                <ItemPrice>KRW{item.itemPrice.toLocaleString("ko-KR")}</ItemPrice>
                                <ItemNumber>담은 수량: {item.basketItemAmount}개</ItemNumber>
                                <ItemPutIn>
                                    <NumberBox
                                        value={quantities[item.itemId]}
                                        onChange={(newAmount) => handleQuantityChange(item.itemId, newAmount, item.itemAmount)}
                                    />
                                </ItemPutIn>
                            </ItemDetail>
                            <Delete_box>
                                <Delete_btn onClick={() => handleRemoveItem(item.itemId)}></Delete_btn>
                            </Delete_box>
                        </InventroyComponent>
                        <SortHr/>
                    </>
                ))
            )}
        </>
    );
}

export default BucketItem;
