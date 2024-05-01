import React, {useState, useEffect} from "react";
import "../../styleCss/Topbar.css";

function Topbar_top() {
          const [isFixed, setIsFixed] = useState(false);

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
                    <img class="logoImg" src="https://projectmanager4.s3.ap-northeast-2.amazonaws.com/logo_fix.svg" alt="로고"/>
                </div>
                <div class="search_bar">
                    <div class="search_text">
                        <input type="text" placeholder="search"/>
                    </div>
                    <div class="search_btn">
                        <img src="https://projectmanager4.s3.ap-northeast-2.amazonaws.com/search_parkmin.svg" alt="로고"/>
                    </div>
                </div>
                <div class="search_btn">
                        <img src="https://projectmanager4.s3.ap-northeast-2.amazonaws.com/search_parkmin.svg" alt="로고"/>
                </div>
                <div class="profile_btn">
                        <img src="https://projectmanager4.s3.ap-northeast-2.amazonaws.com/user+1.svg" alt="로고"/>
                </div>
        </div>
    )
}

export default Topbar_top;