import React from "react";
import ModuleStyle from "../ModuleStyle.module.css";
import styled from "styled-components";
import Sort from "../components/Sort";
import BuyItem from "../components/buylist/BuyItem";

const Maintool = styled.div`
`

function SelectItem() {
    return(
        <div className={ModuleStyle.CategoriPage}>
            <Sort/>
            <Maintool>
                <BuyItem/>
            </Maintool>
        </div>
    )
}

export default SelectItem;