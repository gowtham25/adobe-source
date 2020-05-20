import React from "react";

interface IContainerProps {
    itemData: any;
    itemIndex: number;
    discount: number;
    name: number;
    image: string;
    actual: number;
    display: number;
    count: number;
    removeItem: (val: number, vals: string) => void;
}
const IContainer: React.FC<IContainerProps> = ({
    image = "",
    name = "",
    actual,
    display,
    discount,
    count,
    removeItem,
    itemIndex
}) => {
    return (
        <div className="i-container">
            <img src={image} className="items-image" />
            <div className="i-details-container">
                <div className="details-container">
                    <div className="item-name">{name}</div>
                    <div className="price-container">
                        <div className="current-price">₹{actual}</div>
                        <div className="original-price">₹{display}</div>
                        <div className="offer-details">
                            <span>{discount}% off</span>
                        </div>
                    </div>
                </div>
                <div className="increment-decrement-item">
                    <button
                        disabled={count === 0 ? true : false}
                        className="decrement-item"
                        onClick={() => removeItem(itemIndex, "decrement")}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        disabled
                        className="total-count"
                        value={count}
                    />
                    <button
                        className="increment-item"
                        onClick={() => removeItem(itemIndex, "increment")}
                    >
                        +
                    </button>
                </div>
                <div className="remove-item">
                    <button
                        className="remove-button"
                        onClick={() => removeItem(itemIndex, "remove")}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};
export default IContainer;
