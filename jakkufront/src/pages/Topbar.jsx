import React, {useEffect, useState} from "react";

import Topbar_top from "../components/topbar/Topbar_top";
import Topbar_bottom from "../components/topbar/Topbar_bottom";
import ModuleStyle from "../ModuleStyle.module.css";
import api from "../axios";
import {nicknameState, usermoneyState} from "../atoms/atom";
import {useRecoilState} from "recoil";

function Topbar() {
    const [nickname, setNickname] = useRecoilState(nicknameState);
    const [remainMoney, setRemainMoney] = useRecoilState(usermoneyState);
    const fetchNickname = async () => {
        try {
            const response = await api.get("/topbar/username");
            setNickname(response.data.responseDto);
        } catch (error) {
            console.error("Failed to fetch nickname:", error);
        }
    };

    const remainingMoney = async () => {
        try{
            const response = await api.get(`/customers/basket/point`);
            console.log("남은 돈 확인");
            setRemainMoney(response.data.responseDto);
        } catch (error) {
            console.error("Error fetching remaining money:", error);
        }
    }

    useEffect(() => {
        fetchNickname();
        remainingMoney();
    }, []);

    return(
        <div className={ModuleStyle.TopbarPage}>
            <Topbar_top nickname={nickname}/>
            <Topbar_bottom/>
        </div>
    )
}

export default Topbar;