import React, {useEffect} from "react";
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import {currentState} from '../atoms/atom';
import {useNavigate} from "react-router-dom";

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
            <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <button onClick={handleNextPage} disabled={currentPage === totalPage}>
                    Next
                </button>
            </div>
            <p>
                Page {currentPage} of {totalPage}
            </p>
        </>
    );
}

export default Pagesection;