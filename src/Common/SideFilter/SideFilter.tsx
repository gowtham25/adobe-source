import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./sideFilter.css";

interface SideFilterProps {
    setRangeValue: any;
    rangeValue: any;
    setHandleFilter: (value: any) => void;
    setShowFilterModal: (value: boolean) => void;
}
const SideFilter: React.FC<SideFilterProps> = ({
    setHandleFilter,
    setShowFilterModal,
    setRangeValue,
    rangeValue
}) => {
    return (
        <div>
            <InputRange
                formatLabel={value => `₹${value}`}
                maxValue={200000}
                minValue={0}
                value={rangeValue}
                onChange={value => setRangeValue(value)}
            />
            <div style={{ color: "#a0a0a0", fontSize: "14px" }}>Price</div>
            <div className="desktop-button-filter-container">
                <button
                    className="button-filter"
                    onClick={() => {
                        setHandleFilter(rangeValue);
                    }}
                >
                    Apply
                </button>
            </div>
            <div className="mobile-button-filter-container">
                <button
                    className="mobile-button-filter-apply"
                    onClick={() => {
                        setHandleFilter(rangeValue);
                    }}
                >
                    Apply
                </button>
                <button
                    className="mobile-button-filter-cancel"
                    onClick={() => {
                        setShowFilterModal(false);
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};
export default SideFilter;
