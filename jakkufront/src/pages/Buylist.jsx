import React from "react";
import ModuleStyle from "../ModuleStyle.module.css";
import styled from "styled-components";
import Sort from "../components/Sort";
import BuyItem from "../components/buylist/BuyItem";

const Maintool = styled.div`
`

function Buylist() {
    return(
        <div className={ModuleStyle.BuylistPage}>
            <Sort/>
            <Maintool>
                <BuyItem/>
            </Maintool>
        </div>
    )
}

export default Buylist;