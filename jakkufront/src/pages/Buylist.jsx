import React, {useEffect} from "react";
import ModuleStyle from "../ModuleStyle.module.css";
import styled from "styled-components";
import Sort from "../components/Sort";
import BuyItem from "../components/buylist/BuyItem";
import {useRecoilState} from "recoil";
import {basketItemsState} from "../atoms/atom";
import api from "../axios";

const Maintool = styled.div`
`

function Buylist() {

    const [basketItems, setBasketItems] = useRecoilState(basketItemsState);


    const fetchBasketItems = async () => {
        try {

            const response = await api.get('/customers/history', {
                params: {
                    latest: 'desc',
                    status: 'asc',
                    page: 0, //여기 이 부분에다가 페이지 번호 넣는거 하셈
                    size: 5
                }
            });
            console.log(response.data.responseDto.selectOrder);
            setBasketItems(response.data.responseDto.selectOrder);
        } catch (error) {
            console.error("Error fetching basket items:", error);
        }
    };

    useEffect(() => {
        fetchBasketItems();

    }, []);

    return(
        <div className={ModuleStyle.BuylistPage}>
            <Sort/>
            <Maintool>
                {basketItems.map((item, index) => (
                    <BuyItem
                    itemstate={item.orderState}
                    buydate={item.createAt}
                    imgsrc={item.imageUrl}
                    itemname={item.itemName}
                    amount={item.orderItemTotalAmount}
                    price={item.totalPrice}
                    orderId={item.orderId}
                />
                )
                )}
                
            </Maintool>
        </div>
    )
}

export default Buylist;