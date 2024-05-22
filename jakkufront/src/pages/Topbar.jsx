import React, {useEffect, useState} from "react";

import Topbar_top from "../components/topbar/Topbar_top";
import Topbar_bottom from "../components/topbar/Topbar_bottom";
import ModuleStyle from "../ModuleStyle.module.css";
import api from "../axios";
import { nicknameState } from "../atoms/atom";
import {useRecoilState} from "recoil";

function Topbar() {
    const [nickname, setNickname] = useRecoilState(nicknameState);
    const fetchNickname = async () => {
        try {
            const response = await api.get("/topbar/username");
            setNickname(response.data.responseDto);
        } catch (error) {
            console.error("Failed to fetch nickname:", error);
        }
    };

    useEffect(() => {
        fetchNickname();
    }, []);

    return(
        <div className={ModuleStyle.TopbarPage}>
            <Topbar_top nickname={nickname}/>
            <Topbar_bottom/>
        </div>
    )
}

export default Topbar;