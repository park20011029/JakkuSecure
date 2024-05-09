import React, {useState, useEffect} from "react";
import styled from "styled-components";
import NumberBox from "../button/NumberBox";

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
`

const ItemPutIn = styled.div`
  display: flex;
  margin-top: 1vw;
`

function BucketItem() {
    return (
        <>
            <InventroyComponent>
                <ItemImageBox>
                    <ItemImage className="logoImg" src="https://secure-project-dev-image.s3.ap-northeast-2.amazonaws.com/secure-project-front-image/ex_item.svg" alt="로고"/>
                </ItemImageBox>
                <ItemDetail>
                    <ItemTitle>
                        1000R 커브드 모니터LC32T5  52FDKXKR
                    </ItemTitle>
                    <ItemPrice>
                        KRW100,000
                    </ItemPrice>
                    <ItemNumber>
                        담은 수량 : 15개
                    </ItemNumber>
                    <ItemPutIn>
                        <NumberBox/>
                    </ItemPutIn>
                </ItemDetail>
            </InventroyComponent>
            <SortHr/>
        </>
    );
}

export default BucketItem;