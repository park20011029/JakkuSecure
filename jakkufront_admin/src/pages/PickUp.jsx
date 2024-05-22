import React from "react";
import ModuleStyle from "../ModuleStyle.module.css";
import styled from "styled-components";
import Sort from "../components/Sort";
import BuyItem from "../components/pickup/BuyItem";

const Maintool = styled.div`
`

function PickUp() {
    return(
        <div className={ModuleStyle.PickupPage}>
            <Sort/>
            <Maintool>
                <BuyItem/>
            </Maintool>
        </div>
    )
}

export default PickUp;