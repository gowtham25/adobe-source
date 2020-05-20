import React from "react";

interface SortProps {
    setSortBy: (value: string) => void;
    sortBy: string;
}
const Sort: React.FC<SortProps> = ({ setSortBy, sortBy }) => {
    return (
        <div className="sort-by-desktop">
            <span className="sort-title">Sort By</span>
            <div
                className={`sort-low-high ${
                    sortBy === "LowToHigh" ? "active" : ""
                }`}
                onClick={() => {
                    setSortBy("LowToHigh");
                }}
            >
                Price -- Low to High
            </div>
            <div
                className={`sort-high-low ${
                    sortBy === "HighToLow" ? "active" : ""
                }`}
                onClick={() => {
                    setSortBy("HighToLow");
                }}
            >
                Price -- High to Low
            </div>
            <div
                className={`sort-discount ${
                    sortBy === "Discount" ? "active" : ""
                }`}
                onClick={() => {
                    setSortBy("Discount");
                }}
            >
                Discount
            </div>
        </div>
    );
};

export default Sort;
