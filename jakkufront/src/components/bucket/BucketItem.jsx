import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NumberBox from "../button/NumberBox";
import axios from 'axios';
import Button from "../button/Button";
import {basketItemsState} from "../../atoms/atom";
import {useRecoilState} from "recoil";

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

function BucketItem({ userId }) {
    const [basketItems, setBasketItems] = useRecoilState(basketItemsState);

    const fetchBasketItems = async () => {
        try {

            const response = await axios.get("/customers/basket/1");
            console.log(response.data);
            setBasketItems(response.data.responseDto.selectbasket);
        } catch (error) {
            console.error("Error fetching basket items:", error);
        }
    };

    useEffect(() => {
        fetchBasketItems();

    }, [userId, setBasketItems]);

    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (itemId, quantity) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemId]: quantity
        }));
    };

    return (
        <>
            {basketItems.map(item => (
                <InventroyComponent key={item.itemId}>
                    <ItemImageBox>
                        <ItemImage src={item.imageUrl} alt={item.itemName} />
                    </ItemImageBox>
                    <ItemDetail>
                        <ItemTitle>{item.itemName}</ItemTitle>
                        <ItemPrice>KRW{item.itemPrice.toLocaleString("ko-KR")}</ItemPrice>
                        <ItemNumber>담은 수량: {quantities[item.itemId]}개</ItemNumber>
                        <ItemPutIn>
                            <NumberBox
                                value={quantities[item.itemId]}
                                onChange={(newAmount) => handleQuantityChange(item.itemId, newAmount)}
                            />
                        </ItemPutIn>
                    </ItemDetail>
                </InventroyComponent>
            ))}
            <SortHr />
        </>
    );
}

export default BucketItem;
