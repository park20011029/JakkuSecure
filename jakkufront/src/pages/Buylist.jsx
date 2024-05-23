import React, {useEffect, useState} from "react";
import ModuleStyle from "../ModuleStyle.module.css";
import styled from "styled-components";
import Sort from "../components/Sort";
import BuyItem from "../components/buylist/BuyItem";
import api from "../axios";
import Pagesection from "../components/Pagesection";

function Buylist() {
    const [basketItems, setBasketItems] = useState([]);
    const [totalPage, setTotalpage] = useState();

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
            setTotalpage(response.data.responseDto.pageInfo.totalPages);
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
            <BuyItem items={basketItems}/>
            <Pagesection totalPage={totalPage}/>
        </div>
    )
}

export default Buylist;