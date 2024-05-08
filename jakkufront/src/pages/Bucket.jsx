import React from "react";
import ModuleStyle from "../ModuleStyle.module.css";
import styled from "styled-components";
import Sort from "../components/Sort";
import BucketItem from "../components/bucket/BucketItem";
import Buysection from "../components/bucket/Buysection";

const Maintool = styled.div`
  display: flex;
`

const Itemtool = styled.div`
  width: auto;
`

const Buytool = styled.div`
  width: auto;
  z-index: auto;
`

function SelectItem() {
    return(
        <div className={ModuleStyle.CategoriPage}>
            <Sort/>
            <Maintool>
                <Itemtool>
                    <BucketItem/>
                </Itemtool>
                <Buytool>
                    <Buysection/>
                </Buytool>
            </Maintool>
        </div>
    )
}

export default SelectItem;