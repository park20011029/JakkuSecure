import React, {useEffect} from "react";
import ModuleStyle from "../ModuleStyle.module.css";
import styled from "styled-components";
import Sort from "../components/Sort";
import BucketItem from "../components/bucket/BucketItem";
import Buysection from "../components/bucket/Buysection";
import {useRecoilState} from "recoil";
import {basketItemsState} from "../atoms/atom";
import api from "../axios";

const Maintool = styled.div`
  display: flex;
`

const Itemtool = styled.div`
  width: auto;
`

const Buytool = styled.div`
  width: auto;
`

function Bucket() {
    const userId = 1; // 실제 사용자 ID로 변경해야 합니다.
    const [basketItems, setBasketItems] = useRecoilState(basketItemsState);

    const fetchBasketItems = async () => {
        try {
            const userId = 1; // 실제 사용자 ID로 변경해야 합니다.
            const response = await api.get(`/customers/basket/${userId}`);
            console.log(response.data);
            setBasketItems(response.data.responseDto.selectbasket);
        } catch (error) {
            console.error("Error fetching basket items:", error);
        }
    };

    useEffect(() => {
        fetchBasketItems();

    }, [userId, setBasketItems]);

    return(
        <div className={ModuleStyle.CategoriPage}>
            <Sort/>
            <Maintool>
                <Itemtool>
                    <BucketItem userId={userId} basketItems={basketItems}/>
                </Itemtool>
                <Buytool>
                    <Buysection/>
                </Buytool>
            </Maintool>
        </div>
    )
}

export default Bucket;