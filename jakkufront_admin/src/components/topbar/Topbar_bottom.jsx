import React, {useEffect} from "react";
import { Link, useLocation } from 'react-router-dom';
import "../../styleCss/Topbar.css";
import { useRecoilState } from 'recoil';
import { pageState } from '../../atoms/atom';


function Topbar_bottom(){
    const [page, setPage] = useRecoilState(pageState);

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;

        if (path === '/list') {
            setPage(0);
        } else if (path === '/pickup') {
            setPage(1);
        }
    }, [location]);

    return (
        <div className="notFix">
            <Link to="/list">
                <div><span className={page === 0 ? "clicked" : ""}>상품 목록</span></div>
            </Link>
            <Link to="/pickup">
                <div><span className={page === 1 ? "clicked" : ""}>픽업 관리</span></div>
            </Link>
        </div>
    );
}

export default Topbar_bottom;