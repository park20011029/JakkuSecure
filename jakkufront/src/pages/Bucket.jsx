import React from "react";
import ModuleStyle from "../ModuleStyle.module.css";
import Sort from "../components/categori/Sort";
import BucketItem from "../components/bucket/BucketItem";
import Buysection from "../components/bucket/Buysection";

function SelectItem() {
    return(
        <div className={ModuleStyle.CategoriPage}>
            <Sort/>
            <div>
                <BucketItem/>
                <Buysection/>
            </div>
        </div>
    )
}

export default SelectItem;