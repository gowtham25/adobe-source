import React, { useState } from "react";
import "react-input-range/lib/css/index.css";
import "../SideFilter/sideFilter.css";
import "./modal.css";

interface setHandleFilterProps {
    setShowSortModal: any;
    setSortBy: any;
    sortBy: any;
}
const ModalSort: React.FC<any> = ({ setShowSortModal, setSortBy, sortBy }) => {
    const [radioValue, setRadioValue] = useState(sortBy);
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
                <div className="modal modal-filter">
                    <div className="modal-header">Sort Option</div>
                    <div className="modal-filter-container modal-sort-container">
                        <div>
                            <input
                                type="radio"
                                value="LowToHigh"
                                id="lowToHigh"
                                name="sort"
                                checked={
                                    radioValue === "LowToHigh" ? true : false
                                }
                                onChange={e => {
                                    setRadioValue(e.target.value);
                                }}
                            />
                            <label htmlFor="lowToHigh">
                                Price -- Low to High
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="HighToLow"
                                id="highToLow"
                                name="sort"
                                checked={
                                    radioValue === "HighToLow" ? true : false
                                }
                                onChange={e => {
                                    setRadioValue(e.target.value);
                                }}
                            />
                            <label htmlFor="highToLow">
                                Price -- High to Low
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="Discount"
                                id="discount"
                                name="sort"
                                checked={
                                    radioValue === "Discount" ? true : false
                                }
                                onChange={e => {
                                    setRadioValue(e.target.value);
                                }}
                            />
                            <label htmlFor="discount">Discount</label>
                        </div>
                    </div>
                    <div className="mobile-button-filter-container">
                        <button
                            className="mobile-button-filter-apply"
                            onClick={() => {
                                setSortBy(radioValue);
                            }}
                        >
                            Apply
                        </button>
                        <button
                            className="mobile-button-filter-cancel"
                            onClick={() => {
                                setShowSortModal(false);
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalSort;
