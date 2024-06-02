import React, {useEffect, useState} from "react";
import ModuleStyle from "../ModuleStyle.module.css";
import Sort from "../components/Sort";
import Inventory from "../components/itemlist/Inventory";
import {useRecoilState} from "recoil";
import api from "../axios";
import {currentState} from "../atoms/atom"

function Itemlist() {
    const [items, setItem] = useState([]);
    const [totalPage, setTotalpage] = useState();
    const [currentPage, setCurrentPage] = useRecoilState(currentState);

    const fetchItems = async () => {
        try {
            const response = await api.get('/admin/item', {
                params: {
                    latest: 'desc',
                    price: 'asc',
                    page: currentPage - 1,
                    size: 5,
                    searchName: null
                }
            });
            if (response.data.success) {
                setItem(response.data.responseDto.selectItem || []);
                setTotalpage(response.data.responseDto.pageInfo.totalPages);
            }
        } catch (error) {
            console.log(error)
            alert("목록 에러 발생");
        }
    };

    useEffect(() => {
       fetchItems();
    }, [currentPage])

    return(
    <div className={ModuleStyle.CategoriPage}>
        <Sort/>
        <Inventory items={items}/>
    </div>
    )
  }

  export default Itemlist;