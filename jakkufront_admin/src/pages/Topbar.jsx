import React from "react";

import Topbar_top from "../components/topbar/Topbar_top";
import Topbar_bottom from "../components/topbar/Topbar_bottom";
import ModuleStyle from "../ModuleStyle.module.css";

function Topbar() {
    return(
    <div className={ModuleStyle.TopbarPage}>
        <Topbar_top/>
        <Topbar_bottom/>
    </div>
    )
  }

  export default Topbar;