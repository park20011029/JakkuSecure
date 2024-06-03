import React, { useState, useEffect } from "react";
import { useRecoilState } from 'recoil';
import "../../styleCss/Topbar.css";
import { modalState, searchNameState } from '../../atoms/atom';

function Topbar_top({ nickname }) {
    const [isFixed, setIsFixed] = useState(false);
    const [isOpen, setIsOpen] = useRecoilState(modalState);
    const [searchName, setSearchName] = useRecoilState(searchNameState);
    const [inputValue, setInputValue] = useState('');

    const openModal = () => {
        setIsOpen(true);
    };

    const handleScroll = () => {
        const position = window.pageYOffset;
        setIsFixed(position > 10);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearchClick = () => {
        const sqlInjectionPattern = /[;'"--/*#\\]/;

        if (sqlInjectionPattern.test(inputValue)) {
            alert("검색어에 사용할 수 없는 문자가 포함되어 있습니다.");
            return;
        }

        if (inputValue.length <= 30) {
            setSearchName(inputValue);
        } else {
            alert("30글자 이하로 입력해주세요.");
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="topbar" style={{ position: isFixed ? 'fixed' : 'static', top: isFixed ? '0' : '0' }}>
            <div className="logo">
                <img className="logoImg" src="https://secure-project-dev-image.s3.ap-northeast-2.amazonaws.com/secure-project-front-image/logo_fix+(1).svg" alt="로고"/>
            </div>
            <div className="search_bar">
                <div className="search_text">
                    <input
                        type="text"
                        placeholder="search"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="search_btn" onClick={handleSearchClick}>
                    <img src="https://secure-project-dev-image.s3.ap-northeast-2.amazonaws.com/secure-project-front-image/search-13-128+1.svg" alt="로고"/>
                </div>
            </div>
            <div className="profile_btn" onClick={openModal}>
                <img src="https://secure-project-dev-image.s3.ap-northeast-2.amazonaws.com/secure-project-front-image/user+1+(1).svg" alt="로고"/>
                {nickname && <span className="nickname">{nickname}</span>}
            </div>
        </div>
    );
}

export default Topbar_top;
