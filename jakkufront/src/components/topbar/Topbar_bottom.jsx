import React from "react";
import "../../styleCss/Topbar.css";
import { useNavigate } from "react-router-dom";

function topbar_bottom(){
        // const navigate = useNavigate();
        // const goCategori = () =>{
        //     navigate('/categori');
        // }

        // const goBucket = () => {
        //     navigate('/bucket');
        // }

        return (
            <div class="notFix">
                <div><span>상품 목록</span></div>
                <div><span>장바구니</span></div>
                <div><span>내 구매 내역</span></div>
            </div>
        )

}

export default topbar_bottom;