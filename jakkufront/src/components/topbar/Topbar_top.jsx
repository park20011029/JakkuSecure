import React, {useState, useEffect} from "react";
import { useRecoilState } from 'recoil';
import "../../styleCss/Topbar.css";
import { modalState } from '../../atoms/atom';


function Topbar_top({nickname}) {
    const [isFixed, setIsFixed] = useState(false);

    const [isOpen, setIsOpen] = useRecoilState(modalState);

    const openModal = () => {
        setIsOpen(true);
    };

    const handleScroll = () => {
        const position = window.pageYOffset;
        setIsFixed(position > 10);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div class="topbar"  style={{ position: isFixed ? 'fixed' : 'static', top: isFixed ? '0' : '0' }}>
            <div class="logo">
                <img class="logoImg" src="https://secure-project-dev-image.s3.ap-northeast-2.amazonaws.com/secure-project-front-image/logo_fix+(1).svg" alt="로고"/>
            </div>
            <div class="search_bar">
                <div class="search_text">
                    <input type="text" placeholder="search"/>
                </div>
                <div class="search_btn">
                    <img src="https://secure-project-dev-image.s3.ap-northeast-2.amazonaws.com/secure-project-front-image/search-13-128+1.svg" alt="로고"/>
                </div>
            </div>
            <div class="profile_btn" onClick={openModal}>
                <img src="https://secure-project-dev-image.s3.ap-northeast-2.amazonaws.com/secure-project-front-image/user+1+(1).svg" alt="로고"/>
                {nickname && <span className="nickname">{nickname}</span>}
            </div>
        </div>
    )
}

export default Topbar_top;