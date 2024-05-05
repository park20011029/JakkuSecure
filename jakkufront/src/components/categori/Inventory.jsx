import React from 'react';
import styled from "styled-components";
import { LiaCommentDots } from "react-icons/lia";

const SortHr = styled.hr`
  background: rgba(0, 0, 0, 0.20);
  width: 80vw;
  margin: auto;
`;

const InventroyComponent = styled.div`
  display: flex;
  width: 90vw;
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

const ItemDescription = styled.div`
  color: rgba(0, 0, 0, 0.50);
  font-family: Inter;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 400;
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

const HotdealImage = styled.img`
  width: 3vw;
  height: 3vh;
  margin-right: -0.5vw;
  margin-left: -0.9vw;
`;

const Deadline = styled.div`
  color: rgba(0, 0, 0, 0.60);
  font-family: Inter;
  font-size: 1.1vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Store = styled.div`
  float: left;
  margin-left: 7vw;
  margin-top: 4vw;
  color: rgba(0, 0, 0, 0.60);
  font-family: Inter;
  font-size: 1vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
`;

const ElLogo = styled.img`
  margin-top: 1vw;
  width: 2vw;
  height: 2vw;
`;

const CoupangLogo = styled.img`
  margin-top: 1vw;
  width: 4vw;
  height: 2vh;
`;

const Icon = styled.div`
  margin-left: 0.5vw;
  margin-top: -0.2vw;
  text-align: center;
  display: flex;
  width: 2.3vw;
  height: 2.3vh;
  font-size: 1vw;
  text-decoration-line: underline;
`;

const ItemPutIn = styled.div`
  display: flex;
  margin-top: 1vw;
`

const BaseStyle = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3vh;
      margin-left: 2vh;
      border-radius: 20vh;
      background: rgba(217, 217, 217, 0.50);
      text-align: center;
`;

const SortStyle = styled(BaseStyle)`
    width: 4vw;
`;

function Inventory(){
    return(
        <>
            <InventroyComponent>
                <ItemImageBox>
                    <ItemImage className="logoImg" src="https://projectmanager4.s3.ap-northeast-2.amazonaws.com/image+26.svg" alt="로고"/>
                </ItemImageBox>
                <ItemDetail>
                    <ItemTitle>
                        1000R 커브드 모니터LC32T5  52FDKXKR
                    </ItemTitle>
                    <ItemPrice>
                        KRW152,512~KRW156,564
                    </ItemPrice>
                    <ItemNumber>
                        남은 수량 : 15개
                    </ItemNumber>
                    <ItemPutIn>
                        <>
                            숫자박스
                        </>
                        <SortStyle>
                            담기
                        </SortStyle>
                    </ItemPutIn>
                </ItemDetail>
            </InventroyComponent>
            <SortHr/>


            <InventroyComponent>
                <ItemImageBox>
                    <ItemImage className="logoImg" src="https://projectmanager4.s3.ap-northeast-2.amazonaws.com/image+26.svg" alt="로고"/>
                </ItemImageBox>
                <ItemDetail>
                    <ItemTitle>
                        1000R 커브드 모니터LC32T5  52FDKXKR
                    </ItemTitle>
                    <ItemPrice>
                        KRW152,512~KRW156,564
                    </ItemPrice>
                </ItemDetail>
            </InventroyComponent>
            <SortHr/>
        </>
    );
}


export default Inventory;