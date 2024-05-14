import React from 'react';
import styled from "styled-components";
import InventroyComponent from "./InventoryComponent";

const SortHr = styled.hr`
  background: rgba(0, 0, 0, 0.20);
  width: 85%;
  margin: auto;
`;

const ComponentBox = styled.div`
  display: flex;
  width: 90vw;
  justify-content: space-evenly;
`;

function Inventory(){
    return(
        <>
            <ComponentBox>
                <InventroyComponent/>
            </ComponentBox>
            <SortHr/>
        </>
    );
}


export default Inventory;