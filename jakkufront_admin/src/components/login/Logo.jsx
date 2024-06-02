import React from "react";
import styled from "styled-components";


const LogoImg = styled.img`
  width: 30vw;
  margin-top: 10vh;
  margin-left: 20vw;
`

function Logo() {
    return(
        <LogoImg src="https://secure-project-dev-image.s3.ap-northeast-2.amazonaws.com/secure-project-front-image/logo_fix+(1).svg" alt="로고"/>
    )
}

export default Logo;