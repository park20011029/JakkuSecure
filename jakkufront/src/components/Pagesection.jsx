import React, {useEffect} from "react";
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import {currentState} from '../atoms/atom';
import {useNavigate} from "react-router-dom";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

const NumberSection = styled.div`
  display: flex;
  width: auto;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  margin-top: 1vh;
`

const Arrow_box = styled.div`
  width: 3vw;
  height: 3vw;
`

const Arrow_btn_right = styled(TfiArrowCircleRight)`
  width: 100%;
  height: 100%;
`

const Arrow_btn_left = styled(TfiArrowCircleLeft)`
  width: 100%;
  height: 100%;
`
const Page_text = styled.p`
  font-size: 1.3vw;
`

function Pagesection({ totalPage }) {
    const [currentPage, setCurrentPage] = useRecoilState(currentState);
    const navigate = useNavigate();
    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        navigate(`?page=${currentPage}`);
        window.scrollTo(0, 0);
    }, [currentPage, navigate]);

    return(
        <>
            <NumberSection>
                <Arrow_box>
                    <Arrow_btn_left onClick={handlePrevPage} disabled={currentPage === 1}/>
                </Arrow_box>
                <Page_text>
                    Page {currentPage} of {totalPage}
                </Page_text>
                <Arrow_box>
                    <Arrow_btn_right onClick={handleNextPage} disabled={currentPage === totalPage}/>
                </Arrow_box>
            </NumberSection>
        </>
    );
}

export default Pagesection;