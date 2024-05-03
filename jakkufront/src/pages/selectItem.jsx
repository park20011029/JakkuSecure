import React from "react";
import ModuleStyle from "../ModuleStyle.module.css";
import Sort from "../components/categori/Sort";
import Inventory from "../components/categori/Inventory";

function SelectItem() {
    return(
    <div className={ModuleStyle.CategoriPage}>
        <Sort/>
        <Inventory/>
    </div>
    )
  }

  export default SelectItem;