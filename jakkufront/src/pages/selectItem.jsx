import React, {useEffect, useState} from "react";
import ModuleStyle from "../ModuleStyle.module.css";
import Sort from "../components/Sort";
import Inventory from "../components/categori/Inventory";
import api from "../axios";

function SelectItem() {
    const [items, setItems] = useState([]);


    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await api.get('/customers/item', {
                    params: {
                        latest: 'desc',
                        price: 'asc',
                        page: 0, //여기 이 부분에다가 페이지 번호 넣는거 하셈
                        size: 5,
                        searchName: null
                    }
                });
                if (response.data.success) {
                    setItems(response.data.responseDto.selectItem || []);
                }
            } catch (error) {
                alert("담기 에러 발생");
            }
        };

        fetchItems();
    }, []);

    return(
    <div className={ModuleStyle.CategoriPage}>
        <Sort/>
        <Inventory items={items}/>
    </div>
    )
  }

  export default SelectItem;