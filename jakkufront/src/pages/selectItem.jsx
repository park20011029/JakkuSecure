import React, {useEffect, useState} from "react";
import ModuleStyle from "../ModuleStyle.module.css";
import Sort from "../components/Sort";
import Inventory from "../components/categori/Inventory";
import api from "../axios";
import {useLocation, useNavigate} from "react-router-dom";
import Pagesection from "../components/Pagesection";
import {useRecoilState, useRecoilValue} from "recoil";
import {currentState} from "../atoms/atom";


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SelectItem() {
    const [items, setItems] = useState([]);
    const [totalPage, setTotalpage] = useState();
    const [currentPage, setCurrentPage] = useRecoilState(currentState);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await api.get('/customers/item', {
                    params: {
                        latest: 'desc',
                        price: 'asc',
                        page: currentPage - 1, //여기 이 부분에다가 페이지 번호 넣는거 하셈
                        size: 5,
                        searchName: null
                    }
                });
                if (response.data.success) {
                    setItems(response.data.responseDto.selectItem || []);
                    setTotalpage(response.data.responseDto.pageInfo.totalPages);
                }
            } catch (error) {
                console.log(error)
                alert("목록 에러 발생");
            }
        };

        fetchItems();
    }, [currentPage]);

    return(
    <div className={ModuleStyle.CategoriPage}>
        <Sort/>
        <Inventory items={items}/>
        <Pagesection totalPage={totalPage}/>
    </div>
    )
}

  export default SelectItem;