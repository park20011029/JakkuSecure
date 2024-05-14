import React from 'react';
import styled from "styled-components";
import NumberBox from "../button/NumberBox";

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

function InventoryComponent() {
    return (
        <>
            <ItemImageBox>
                <ItemImage className="logoImg"
                           src="https://secure-project-dev-image.s3.ap-northeast-2.amazonaws.com/secure-project-front-image/ex_item.svg"
                           alt="로고"/>
            </ItemImageBox>
            <ItemDetail>
                <ItemTitle>
                    1000R 커브드 모니터LC32T5 52FDKXKR
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
                        담기
                    </SortStyle>
                </ItemPutIn>
            </ItemDetail>
        </>
    );
}

export default InventoryComponent;