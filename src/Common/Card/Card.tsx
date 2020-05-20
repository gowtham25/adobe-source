import React from "react";
import "./card.css";

interface ICardProps {
    itemData: any;
    discount: number;
    name: string;
    image: string;
    actual: string;
    display: string;
    handleAddCart: (payload: any) => void;
}
const Card: React.FC<ICardProps> = ({
    discount = "",
    name = "",
    image = "",
    actual = "",
    display = "",
    itemData = {},
    handleAddCart
}) => {
    return (
        <>
            <div className="card-container-top">
                <div className="card-container">
                    <img src={image} className="item-image" />
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
                    <div className="button-container">
                        <button
                            className="add-cart-button"
                            onClick={() => {
                                handleAddCart(itemData);
                            }}
                        >
                            Add Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
