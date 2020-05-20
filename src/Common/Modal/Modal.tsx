import React from "react";
import "react-input-range/lib/css/index.css";
import SideFilter from "../SideFilter/SideFilter";
import "../SideFilter/sideFilter.css";
import "./modal.css";

interface setHandleFilterProps {
    title: string;
    setHandleFilter: any;
    setRangeValue: any;
    rangeValue: any;
    setShowFilterModal: (value: boolean) => void;
}
const Modal: React.FC<setHandleFilterProps> = ({
    title = "",
    setHandleFilter = "",
    setShowFilterModal,
    rangeValue,
    setRangeValue
}) => {
    return (
        <>
            <div className="modal-overlay" />
            <div
                className="modal-wrapper"
                aria-modal
                aria-hidden
                tabIndex={-1}
                role="dialog"
            >
                <div className="modal">
                    <div className="modal-header">{title}</div>
                    <div className="modal-filter-container">
                        <SideFilter
                            setHandleFilter={setHandleFilter}
                            setShowFilterModal={setShowFilterModal}
                            setRangeValue={setRangeValue}
                            rangeValue={rangeValue}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
