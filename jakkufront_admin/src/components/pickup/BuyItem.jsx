import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Button from "../button/Button";

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
  font-family: Inter;
  font-size: 1.8vw;
  font-weight: bold;
  color: #000;
  padding-left: 9vw;
  width: auto;
`;

const BuyDate = styled.div`
  font-family: Inter;
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
  font-family: Inter;
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
  font-family: Inter;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 0.5vw;
`;

const ItemNumber = styled.div`
  margin-top: 7.5vw;
`;

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

function BuyItem() {
    return (
        <>
            <StateText>
                <ItemState>
                    픽업대기
                </ItemState>
                <BuyDate>
                    2024.04.14
                </BuyDate>
            </StateText>

            <InventroyComponent>
                <ItemImageBox>
                    <ItemImage className="logoImg" src="https://secure-project-dev-image.s3.ap-northeast-2.amazonaws.com/secure-project-front-image/ex_item.svg" alt="로고"/>
                </ItemImageBox>
                <ItemDetail>
                    <ItemTitle>
                        1000R 커브드 모니터LC32T5  52FDKXKR
                        <PlusItem>
                            외 3개
                        </PlusItem>
                    </ItemTitle>
                    <ItemPrice>
                        KRW100,000
                    </ItemPrice>
                    <ItemNumber>
                        구매 총 수량 : 4개
                    </ItemNumber>
                </ItemDetail>
                <BuyDetail>
                    <Button>상세보기</Button>
                    <Refund>주문 취소</Refund>
                </BuyDetail>
            </InventroyComponent>
            <SortHr/>
        </>
    );
}

export default BuyItem;