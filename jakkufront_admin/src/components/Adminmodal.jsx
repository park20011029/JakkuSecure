import React, {useEffect} from "react";
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/atom';
import "../styleCss/Modal.css";
import AdminImg from "./modal/AdminImg";
import Admincontent from "./modal/Admincontent";

function Modal() {
    const [isOpen, setIsOpen] = useRecoilState(modalState);

    const handleOverlayClick = (e) => {
        if (e.target.className === "modal-overlay") {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <div>
            {isOpen && (
                <div className="modal-overlay" onClick={handleOverlayClick}>
                    <div className="modal">
                        <div className="modal-content">
                            <AdminImg/>
                            <Admincontent/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;