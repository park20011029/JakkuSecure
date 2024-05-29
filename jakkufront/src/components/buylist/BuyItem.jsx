import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Button from "../button/Button";
import api from "../../axios";

const SortHr = styled.hr`
    background: rgba(0, 0, 0, 0.20);
    width: 95%;
    margin: auto;
`;

const StateText = styled.div`
    padding-top: 3vh;
    display: flex;
`;

const ItemState = styled.div`
    font-size: 1.8vw;
    font-weight: bold;
    color: #000;
    padding-left: 9vw;
    width: auto;
`;

const BuyDate = styled.div`
    font-size: 1vw;
    color: #000;
    padding-left: 0.5vw;
    width: auto;
    margin-top: auto;
`;

const InventroyComponent = styled.div`
    display: flex;
    width: 80vw;
    justify-content: space-around;
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
    width: auto;
    margin-top: 4vw;
`;

const ItemTitle = styled.div`
    color: rgba(0, 0, 0, 0.80);
    display: flex;
    font-size: 1.5vw;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
`;

const PlusItem = styled(ItemTitle)`
    font-weight: initial;
    margin-left: 0.3vw;
    font-size: 1.3vw;
    margin-top: auto;
`;

const ItemPrice =styled.div`
    color: #000;
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 0.5vw;
`;

const ItemNumber = styled.div`
    margin-top: 7.5vw;
`;

const RefundTextColor = styled.div`
    Color: red;
`;

const CompleteTextColor = styled.div`
    Color: #898989;
`;

const ReadyTextColor = styled.div`
`

const BuyDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 2vw;
  margin-right: 2vw;
  width: 8vw;
`;

const Refund = styled(Button)`
  margin-top: 1vw;
  background-color: red;;

  &:hover {
    background: rgb(255, 0, 0, 0.8);
  }

  &:active {
    background: rgba(255, 0, 0, 0.2);
  }
`;

function BuyItem({items}) {
    const formattedPrice = (price) => new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'KRW',
        currencyDisplay: 'code'
    }).format(price);

    const getDetail = async (orderId) => {
        try {
            const response = await api.get(`/customers/history/detail/${orderId}`);
            console.log(response.data.responseDto.selectHistoryDetail);
        } catch (e) {
            console.log(e);
        }
    }

    const refundItem = async (orderId) => {
        try {
            const response = await api.patch(`/customers/refund/${orderId}`);
            console.log(response.data);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            {items.length === 0 ? (
                <InventroyComponent>
                    <ItemTitle>
                        구매한 상품이 없습니다.
                    </ItemTitle>
                </InventroyComponent>
            ) : (
                items.map(item => (
                    <>
                        <StateText>
                            <ItemState>
                                {item.orderState === 'READY' ? ( <ReadyTextColor>픽업 대기</ReadyTextColor>)
                                    : item.orderState === 'REFUND' ? (<RefundTextColor>환불 완료</RefundTextColor>)
                                        : <CompleteTextColor>구매 확정</CompleteTextColor>}
                            </ItemState>
                            <BuyDate>
                                {item.createAt}
                            </BuyDate>
                        </StateText>

                        <InventroyComponent>
                            <ItemImageBox>
                                <ItemImage className="logoImg" src={item.imageUrl} alt="로고"/>
                            </ItemImageBox>
                            <ItemDetail>
                                <ItemTitle>
                                    {item.itemName}
                                    {item.orderItemTotalAmount > 1 && (
                                        <PlusItem>
                                            외 {item.orderItemTotalAmount - 1}개
                                        </PlusItem>
                                    )}
                                </ItemTitle>
                                <ItemPrice>
                                    {formattedPrice(item.totalPrice)}
                                </ItemPrice>
                                <ItemNumber>
                                    구매 총 수량 : {item.orderItemTotalAmount}개
                                </ItemNumber>
                            </ItemDetail>
                            <BuyDetail>
                                <Button onClick={()=>getDetail(item.orderId)}>상세보기</Button>
                                {item.orderState === 'READY' ? (
                                    <Refund onClick={()=>refundItem(item.orderId)}>환불</Refund>) : null}
                            </BuyDetail>
                        </InventroyComponent>
                        <SortHr/>
                    </>
                )))}
        </>
    );
}

export default BuyItem;