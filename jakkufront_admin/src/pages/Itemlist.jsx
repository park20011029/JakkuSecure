import React from "react";
import ModuleStyle from "../ModuleStyle.module.css";
import Sort from "../components/Sort";
import Inventory from "../components/itemlist/Inventory";

function Itemlist() {
    return(
    <div className={ModuleStyle.CategoriPage}>
        <Sort/>
        <Inventory/>
    </div>
    )
  }

  export default Itemlist;